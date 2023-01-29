import React from 'react';
import styled from 'styled-components';
import RecentCityItem from './RecentCityItem';
const StyledWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 100%;
  margin-inline: 1rem;
`;
const StyledTitle = styled.p`
  color: #616475;
`;
const RecentCities = () => {
  const cities = JSON.parse(localStorage.getItem('cities'))?.reverse();

  return (
    <StyledWrapper>
      <StyledTitle>Recently Searched</StyledTitle>
      {cities?.map((city, index) => (
        <RecentCityItem
          key={index}
          city={city}
        />
      ))}
    </StyledWrapper>
  );
};

export default RecentCities;
