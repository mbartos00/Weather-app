import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../../assets/search-ico.png';

const StyledSearchBar = styled.form`
  margin-top: 3.75rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const StyledIco = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  left: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
`;
const StyledSearchInput = styled.input`
  margin-inline: 0.8rem;
  width: 75%;
  color: #616475;
  text-align: left;
  padding: 0.8rem 2.5rem;
  background-color: #1e213a;
  border: 2px solid #9494a5;
  border-radius: 2px;
  &::placeholder {
    position: absolute;
    color: #616475;
    left: 15%;
  }
`;

const StyledButton = styled.button`
  margin-right: 0.8rem;
  width: 25%;
  background-color: #3c47e9;
  color: #e7e7eb;
  border: none;
`;

const SearchBar = ({ setNewData, onClick }) => {
  const [input, setInput] = useState('');
  const [recentCities, setRecentCities] = useState(getCities);

  function getCities() {
    const cities = JSON.parse(localStorage.getItem('cities'));
    if (cities) {
      return cities;
    } else {
      return [];
    }
  }

  const getWeatherByCity = async query => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const data = await response.json();
      const { coord } = data;
      return coord;
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = getWeatherByCity(input);
    onClick();
    if (!recentCities.includes(input)) {
      setRecentCities(prev => [...prev, input]);
    }
    setNewData(data);
  };
  const handleChange = e => {
    setInput(e.target.value);
  };
  useEffect(() => {
    if (input.length !== 0) {
      localStorage.setItem('cities', JSON.stringify(recentCities));
    }
    if (JSON.parse(localStorage.getItem('cities'))?.length > 5) {
      const newCities = recentCities;
      newCities.shift();
      localStorage.setItem('cities', JSON.stringify(newCities));
    }
    setInput('');
  }, [recentCities]);
  return (
    <StyledSearchBar onSubmit={handleSubmit}>
      <StyledIco
        src={searchIcon}
        alt='search'
      />
      <StyledSearchInput
        type='text'
        aria-label='searchbar'
        placeholder='search location'
        value={input}
        onChange={handleChange}
      />
      <StyledButton>Search</StyledButton>
    </StyledSearchBar>
  );
};

export default SearchBar;
