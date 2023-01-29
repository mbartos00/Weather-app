import React from 'react';
import styled from 'styled-components';
import { StyledPanel, StyledTitle } from './HighlightPanelWind';
import ProgressBar from './ProgressBar';

const StyledHumidityContainer = styled(StyledPanel)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem;
  @media screen and (min-width: 1120px) {
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
`;

const StyledTitleHumidity = styled(StyledTitle)`
  @media screen and (min-width: 1120px) {
    margin-top: -1.3rem;
  }
`;

const StyledValue = styled.h2`
  margin-bottom: 1.5rem;
  position: relative;
  &::after {
    content: '%';
    position: absolute;
    top: 25%;
    left: 110%;
    font-weight: 500;
    font-size: 3rem;
  }
`;
const StyledProgressContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: '100';
    right: 0;
    bottom: 140%;
    position: absolute;
    font-size: 0.9rem;
    color: #a09fb1;
  }
  &::after {
    content: '%';
    position: absolute;
    top: 140%;
    color: #a09fb1;
    right: 0;
    font-size: 0.9rem;
  }
  span {
    position: absolute;
    font-size: 0.9rem;
    color: #a09fb1;
    left: 0;
    bottom: 140%;
  }
`;

const HighlightPanelHumidity = ({ title, value }) => {
  return (
    <StyledHumidityContainer>
      <StyledTitleHumidity>Humidity</StyledTitleHumidity>
      <StyledValue>{value}</StyledValue>
      <StyledProgressContainer>
        <span>0</span>
        <ProgressBar
          color={'#f1d722'}
          completed={value}
        />
      </StyledProgressContainer>
    </StyledHumidityContainer>
  );
};

export default HighlightPanelHumidity;
