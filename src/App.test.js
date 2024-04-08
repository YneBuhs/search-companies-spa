import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { updateStarredStatus } from './actions/api';
import App from './App';

jest.mock('./actions/api', () => ({
  fetchAllData: jest.fn(() => Promise.resolve([{ id: 1, name: 'Company A', starred: false }])),
  fetchNameData: jest.fn((name) => Promise.resolve([{ id: 1, name: 'Company A', starred: false }])),
  updateStarredStatus: jest.fn(),
}));

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders search input and button', async () => {
    const inputElement = await screen.findByPlaceholderText('Enter your Search here');
    const searchButtonElement = await screen.findByRole("submit");

    expect(inputElement).toBeInTheDocument();
    expect(searchButtonElement).toBeInTheDocument();
  });

  it('displays search results after submitting search form', async () => {
    const inputElement = await screen.findByPlaceholderText('Enter your Search here');
    const searchButtonElement = await screen.findByRole("submit");

    fireEvent.change(inputElement, { target: { value: 'Company' } });
    fireEvent.click(searchButtonElement);

    await waitFor(() => {
      const companyNameElement = screen.getByText('Company A');
      expect(companyNameElement).toBeInTheDocument();
    });
  });

  it('updates starred status of a company when InformationCard is clicked', async () => {
    const companyCardElement = await screen.findByRole("star-button");
    fireEvent.click(companyCardElement);
    
    await waitFor(() => {
      expect(updateStarredStatus).toHaveBeenCalledWith({ id: 1, name: 'Company A', starred: false }, true);
    });
  });
});