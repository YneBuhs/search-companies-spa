import { fetchAllData, fetchNameData, updateStarredStatus } from './api';
import fetchMock from 'jest-fetch-mock';

// GH issue fixes: https://github.com/jefflau/jest-fetch-mock/issues/184
// and https://github.com/jefflau/jest-fetch-mock/issues/194 

beforeAll(() => {
  fetchMock.enableMocks();
  fetchMock.doMock();
});

afterEach(() => {
  fetch.resetMocks();
});

describe('Backend calls', () => {
  describe('fetchAllData', () => {
    it('fetches data', async () => {
      const mockData = [{ id: 1, name: 'Company A' }, { id: 2, name: 'Company B' }];
      fetch.mockResponseOnce(JSON.stringify(mockData));

      const data = await fetchAllData();

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith('http://localhost:3001/search?_limit=10');

      expect(data).toEqual(mockData);
    });

    it('handles fetch error gracefully', async () => {
      fetch.mockRejectOnce(new Error('Failed to fetch data'));

      const data = await fetchAllData();

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(data).toEqual([]);
    });
  });

  describe('fetchNameData', () => {
    it('fetches data by name', async () => {
      const name = 'Company';
      const mockData = [{ id: 1, name: 'Company A' }, { id: 2, name: 'Company B' }];
      fetch.mockResponseOnce(JSON.stringify(mockData));

      const data = await fetchNameData(name);

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(`http://localhost:3001/search?name_like=${name}&_limit=10`);

      expect(data).toEqual(mockData);
    });

    it('handles fetch error by name gracefully', async () => {
      const name = 'Company';
      fetch.mockRejectOnce(new Error('Failed to fetch data'));

      const data = await fetchNameData(name);

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(data).toEqual([]);
    });
  });

  describe('updateStarredStatus', () => {
    it('updates starred status for a company', async () => {
      const company = { id: 1, name: 'Company A', starred: false };
      const starred = true;
      const updatedCompany = { ...company, starred };

      fetch.mockResponseOnce(JSON.stringify(updatedCompany), { status: 200 });

      await updateStarredStatus(company, starred);

      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(`http://localhost:3001/search/${company.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedCompany)
      });
    });

    it('handles update starred status error gracefully', async () => {
      const company = { id: 1, name: 'Company A', starred: false };
      const starred = true;

      fetch.mockRejectOnce(new Error('Failed to update starred status'));

      await expect(updateStarredStatus(company, starred)).rejects.toThrow('Failed to update starred status');
    });
  });
});