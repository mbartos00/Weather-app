import React from 'react';
import styled from 'styled-components';
import iconFilter from '../utils/iconFilter';

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

const AsideImage = ({ data }) => {
  const icon = iconFilter(data.current.weather[0].icon);
  return (
    <StyledImageContainer>
      <StyledImage
        src={icon}
        alt='shower-ico'
      />
    </StyledImageContainer>
  );
};

export default AsideImage;
