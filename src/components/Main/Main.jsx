import React from 'react';
import styled from 'styled-components';
import Cards from './Cards';
import Highlights from './Highlights';
const StyledMain = styled.main`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #100e1d;
  min-height: 100vh;
  max-width: 100%;
  width: 100%;
  color: #e7e7eb;
  @media screen and (min-width: 1120px) {
    width: 70%;
    position: relative;
    padding-bottom: 1.2rem;
  }
`;

const Main = ({ data }) => {
  return (
    <StyledMain>
      <Cards data={data} />
      <Highlights data={data} />
    </StyledMain>
  );
};

export default Main;
