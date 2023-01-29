import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import locationIco from '../../assets/location.svg';
import useGetPosition from '../hooks/useGetPosition';

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
const AsideLocation = ({ data }) => {
  const { lat, lon } = data;
  const [location, setLocation] = useState();
  const getLocation = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const data = await response.json();
      setLocation(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, [lat, lon]);

  return (
    <StyledLocationDiv>
      <StyledIco
        src={locationIco}
        alt='location-ico'
      />
      {location && <StyledText>{location.name}</StyledText>}
    </StyledLocationDiv>
  );
};

export default AsideLocation;
