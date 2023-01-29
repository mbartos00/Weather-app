import React, { useState } from 'react';
import styled from 'styled-components';
import RecentCities from './RecentCities';
import SearchBar from './SearchBar';

const StyledNav = styled.nav`
  position: fixed;
  z-index: 2;
  background-color: #1e213a;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  height: 100vh;
  flex-direction: column;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-200%')});
  transition: all ease-in-out 0.5s;
  @media screen and (min-width: 1120px) {
    width: 30%;
  }
`;

const StyledCloseBtn = styled.div`
  position: absolute;
  width: 30px;
  padding: 10px;
  height: 30px;
  margin-top: 1.1rem;
  margin-right: 1.1rem;
  right: 0;
  cursor: pointer;
  & span {
    display: block;
    transform: rotate(45deg);
    top: 50%;
    left: -50%;
    background-color: #e7e7eb;
    border-radius: 50px;
    width: 20px;
    height: 2px;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      transform: rotate(-90deg);
      background-color: #e7e7eb;
      border-radius: 50px;
      width: 20px;
      height: 2px;
    }
  }
`;

const Nav = ({ isOpen, setIsOpen, setNewData }) => {
  const handleCloseNavClick = () => {
    setIsOpen(false);
  };

  return (
    <StyledNav isOpen={isOpen}>
      <StyledCloseBtn
        onClick={handleCloseNavClick}
        aria-label='close-btn'
      >
        <span></span>
      </StyledCloseBtn>
      <SearchBar
        setNewData={setNewData}
        onClick={handleCloseNavClick}
      />
      <RecentCities />
    </StyledNav>
  );
};

export default Nav;
