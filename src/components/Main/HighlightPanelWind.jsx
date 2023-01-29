import React from 'react';
import styled from 'styled-components';
import locationPointer from '../../assets/locationPointer-ico.svg';
import degToDirection from '../utils/degToDirection';
export const StyledPanel = styled.div`
  background-color: #1e213a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding: 2rem 0;
  @media screen and (min-width: 1120px) {
    width: 40%;
  }
  @media screen and (min-width: 1440px) {
    width: 32%;
  }
`;
export const StyledTitle = styled.h5`
  margin-bottom: 1rem;
`;

const StyledWindContainer = styled(StyledPanel)`
  padding: 2rem;
  @media screen and (min-width: 1120px) {
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
`;
const StyledValue = styled.h2`
  margin-bottom: 1.8rem;
  position: relative;
  left: -10%;
  &::after {
    content: 'km/h';
    position: absolute;
    top: calc(50% - 5px);
    left: 110%;
    font-weight: 500;
    font-size: 2.25rem;
  }
`;
const StyledWindDirectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
const StyledIcoContainer = styled.span`
  display: flex;
  width: 1.8rem;
  aspect-ratio: 1;
  border-radius: 100vh;
  justify-content: center;
  align-items: center;
  transform: rotate(-90deg);
  background-color: #6e707a;
  img {
    width: 0.7rem;
  }
`;

const StyledWindDirection = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
`;
const HighlightPanelWind = ({ windDeg, value }) => {
  return (
    <StyledWindContainer>
      <StyledTitle>Wind status</StyledTitle>
      <StyledValue>{value.toFixed(1)}</StyledValue>
      <StyledWindDirectionContainer>
        <StyledIcoContainer windDeg={windDeg}>
          <img
            src={locationPointer}
            alt='location-pointer'
          />
        </StyledIcoContainer>
        <StyledWindDirection>{degToDirection(windDeg)}</StyledWindDirection>
      </StyledWindDirectionContainer>
    </StyledWindContainer>
  );
};

export default HighlightPanelWind;
