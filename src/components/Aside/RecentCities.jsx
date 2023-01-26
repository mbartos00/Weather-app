import React from 'react';
import styled from 'styled-components';

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
  return (
    <StyledWrapper>
      <StyledTitle>Recently Searched</StyledTitle>
    </StyledWrapper>
  );
};

export default RecentCities;
