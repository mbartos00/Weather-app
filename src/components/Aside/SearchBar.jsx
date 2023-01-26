import React from 'react';
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

const handleSubmit = e => {
  e.preventDefault();
};

const SearchBar = () => {
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
      />
      <StyledButton>Search</StyledButton>
    </StyledSearchBar>
  );
};

export default SearchBar;
