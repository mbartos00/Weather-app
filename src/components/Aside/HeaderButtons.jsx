import React from 'react';
import styled from 'styled-components';
import gps from '../../assets/gps.svg';

const StyledSearchButton = styled.button`
  padding: 0.6rem 1.2rem;
  margin-left: 0.7rem;
  margin-top: 1.1rem;
  border: 0;
  text-align: center;
  color: #e7e7eb;
  background-color: #6e707a;
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const StyledLocationButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  margin-top: 1.1rem;
  margin-right: 0.7rem;
  color: #e7e7eb;
  background-color: #6e707a;
  border-radius: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 30px;
  }
`;

const HeaderButtons = ({ onNavOpen }) => {
  const handleOpenNav = () => {
    onNavOpen(true);
  };

  return (
    <>
      <StyledSearchButton onClick={handleOpenNav}>
        Search for places
      </StyledSearchButton>
      <StyledLocationButton>
        <img
          src={gps}
          alt='gps-ico'
        />
      </StyledLocationButton>
    </>
  );
};

export default HeaderButtons;
