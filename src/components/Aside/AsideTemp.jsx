import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  @media screen and (min-width: 1120px) {
    margin-top: 2rem;
  }
`;

const StyledText = styled.h1`
  position: relative;

  &:after {
    content: '\\00B0 C';
    position: absolute;
    left: 100%;
    top: calc(50% - 5px);
    color: #88869d;
    font-size: 4rem;
    font-weight: 600;
    @media screen and (min-width: 1120px) {
      margin-bottom: 2rem;
    }
  }
`;
const StyledWeatherType = styled.h3`
  color: #88869d;
  margin-top: 1.2rem;
  margin-bottom: 3rem;
`;
const AsideTemp = ({ data }) => {
  const { temp } = data.current;

  const { main: weather } = data.current.weather[0];
  return (
    <StyledContainer>
      <StyledText>{Math.round(temp).toFixed(0)}</StyledText>
      <StyledWeatherType>{weather}</StyledWeatherType>
    </StyledContainer>
  );
};

export default AsideTemp;
