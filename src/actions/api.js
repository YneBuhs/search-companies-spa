export const fetchAllData = async (limit=10) => {
    try {
      const response = await fetch(`http://localhost:3001/search?_limit=${limit}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching all data:', error);
      return [];
    }
  };
  
  export const fetchNameData = async (name, limit=10) => {
    try {
      const response = await fetch(`http://localhost:3001/search?name_like=${name}&_limit=${limit}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data by name:', error);
      return [];
    }
  };  

  export const updateStarredStatus = async (company, starred) => {
    const updatedCompany = {...company, starred: starred}
    try {
      const response = await fetch(`http://localhost:3001/search/${company.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...updatedCompany})
      });
      if (!response.ok) {
        throw new Error('Failed to update starred status');
      }

    } catch (error) {
      throw new Error(error);
    }
  };