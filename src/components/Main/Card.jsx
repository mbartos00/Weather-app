import React from 'react';
import styled from 'styled-components';
import iconFilter from '../utils/iconFilter';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #1e213a;
  padding: 1.125rem 1.4rem;
  width: 38%;
  @media screen and (min-width: 1440px) {
    width: 11%;
  }
`;

const StyledTitle = styled.h5`
  margin-bottom: 0.675rem;
`;
const StyledImage = styled.img`
  width: 4.2rem;
  height: 4.5rem;
`;
const StyledTempContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  margin-right: 1rem;
  gap: 2rem;
  @media screen and (min-width: 1440px) {
    margin-top: 1rem;
    margin-bottom: -0.5rem;
    gap: 3rem;
  }
`;
const StyledDay = styled.p`
  position: relative;

  &::before {
    content: '\\00B0 C';
    position: absolute;
    left: 100%;
  }
`;
const StyledNight = styled.p`
  position: relative;
  color: #88869d;

  &::before {
    content: '\\00B0 C';
    position: absolute;
    left: 100%;
  }
`;

const Card = ({ index, dayTemp, nightTemp, icon }) => {
  const nextDay = new Date();
  nextDay.setDate(nextDay.getDate() + index + 1);
  const nextDayDateString = nextDay.toString().split(' ').slice(0, 3).join(' ');
  const ico = iconFilter(icon);
  return (
    <StyledCard>
      <StyledTitle>{nextDayDateString}</StyledTitle>
      <StyledImage src={ico} />
      <StyledTempContainer>
        <StyledDay>{Math.round(dayTemp).toFixed(0)}</StyledDay>
        <StyledNight>{Math.round(nightTemp).toFixed(0)}</StyledNight>
      </StyledTempContainer>
    </StyledCard>
  );
};

export default Card;
