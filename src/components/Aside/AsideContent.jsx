import React from 'react';
import styled from 'styled-components';
import AsideDate from './AsideDate';
import AsideImage from './AsideImage';
import AsideLocation from './AsideLocation';
import AsideTemp from './AsideTemp';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;

const AsideContent = () => {
  return (
    <StyledContainer>
      <AsideImage />
      <AsideTemp />
      <AsideDate />
      <AsideLocation />
    </StyledContainer>
  );
};

export default AsideContent;
