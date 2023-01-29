import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledCardsContainer = styled.div`
  display: inherit;
  flex-direction: row;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3.2rem 0;
  z-index: 1;
  gap: 1.7rem;
  @media screen and (min-width: 1120px) {
    width: 100%;
    padding-top: 2rem;
    gap: 2rem;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 3.2rem;
  }
`;

const Cards = ({ data }) => {
  const dailyData = data.daily.slice(0, 5);
  return (
    <StyledCardsContainer>
      {dailyData.map((item, index) => (
        <Card
          key={index}
          index={index}
          dayTemp={item.temp.day}
          nightTemp={item.temp.night}
          icon={item.weather[0].icon}
        />
      ))}
    </StyledCardsContainer>
  );
};

export default Cards;
