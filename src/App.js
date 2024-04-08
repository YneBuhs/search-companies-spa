import React, { useState, useEffect, useCallback } from 'react';
import InputField from './forms/InputField';
import InformationCard from './InformationCard';
import { fetchAllData, fetchNameData, updateStarredStatus } from './actions/api'
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const updateStarCount = useCallback(async (id, starred) => {
    const company = searchResults.find(res => res.id === id);
    if (company) {
      await updateStarredStatus(company, starred);
      const data = await fetchAllData();
      console.log("ata",data)
      setSearchResults(data);
    }
  }, [searchResults]);  

  const fetchData = async () => {
    const data = await fetchAllData();
    setSearchResults(data);
  };

  const handleInputChange = useCallback(async (event) => {
    setInputValue(event.target.value);
    const data = await fetchNameData(event.target.value)
    setSearchResults(data)
  }, []);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    const data = await fetchNameData(inputValue)
    setSearchResults(data)
  }, []);

  const displayStarred = () => {
    console.log(searchResults)
    const updatedResults = searchResults.filter(res => res.starred === true)
    setSearchResults(updatedResults)
  }

  const starredCount = searchResults.reduce((count, result) => {
    return count + (result.starred ? 1 : 0);
  }, 0);
  
  return (
    <div className="app">
      <main>
        <section className="search-container">
          <h1>Search</h1>
          <button role="btn__display-starred" onClick={displayStarred} className="btn__display"><h2>Your starred companies: {starredCount}</h2></button>
          <form onSubmit={handleSubmit} className="search-form">
            <InputField
              value={inputValue}
              placeholder={"Enter your Search here"}
              onChange={handleInputChange}
            />
            <button role="submit" type="submit">Search</button>
          </form>
        </section>
        <section className="results-container">
            {searchResults
              .filter(result => result.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
              .map((result, index) => (
                <InformationCard
                  key={index}
                  updateStarred={updateStarCount}
                  {...result}
                />
            ))}
          </section>
      </main>
    </div>
  );
};

export default App;