import React from 'react';
import styled from 'styled-components';
import locationIco from '../../assets/location.svg';

const StyledLocationDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  @media screen and (min-width: 1120px) {
    position: absolute;
    bottom: 5%;
  }
`;
const StyledIco = styled.img`
  width: 16px;
  margin-right: 0.7rem;
`;
const StyledText = styled.h4`
  color: #88869d;
`;
const AsideLocation = () => {
  return (
    <StyledLocationDiv>
      <StyledIco
        src={locationIco}
        alt='location-ico'
      />
      <StyledText>Helsinki</StyledText>
    </StyledLocationDiv>
  );
};

export default AsideLocation;
