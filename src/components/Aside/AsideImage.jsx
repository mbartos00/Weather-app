import React from 'react';
import styled from 'styled-components';
import showerImg from '../../assets/Shower.svg';

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  width: 100%;
`;
const StyledImage = styled.img`
  width: 16rem;
  @media screen and (min-width: 1120px) {
    width: 15rem;
    aspect-ratio: 1;
  }
`;

const AsideImage = () => {
  return (
    <StyledImageContainer>
      <StyledImage
        src={showerImg}
        alt='shower-ico'
      />
    </StyledImageContainer>
  );
};

export default AsideImage;
