import React from 'react';
import styled, { keyframes } from 'styled-components';
import AsideContent from './AsideContent';
import AsideHeader from './AsideHeader';
import cloudBackground from '../../assets/cloud_background.svg';

const wind = keyframes`
   0% {
      background-position: -515px 200px, -300px 300px, -200px 250px;
    }
    100% {
      background-position: 1200px 200px, 1300px 300px, 1250px 250px;
    }
`;
const StyledAside = styled.aside`
  padding-bottom: 3rem;
  max-width: 100%;
  width: 100%;

  color: #e7e7eb;
  background-color: #1e213a;
  background-image: url(${cloudBackground});
  background-size: cover;
  animation: ${wind} 20s infinite linear;
  @media screen and (min-width: 1120px) {
    max-width: 30%;
    min-height: 100vh;
    position: relative;
    padding-bottom: 3.55rem;
  }
`;

const Aside = ({ data, setNewData, error }) => {
  return (
    <StyledAside>
      <AsideHeader
        setNewData={setNewData}
        error={error}
      />
      <AsideContent data={data} />
    </StyledAside>
  );
};

export default Aside;
