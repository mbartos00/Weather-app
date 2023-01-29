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

const AsideContent = ({ data }) => {
  return (
    <StyledContainer>
      <AsideImage data={data} />
      <AsideTemp data={data} />
      <AsideDate data={data} />
      <AsideLocation data={data} />
    </StyledContainer>
  );
};

export default AsideContent;
