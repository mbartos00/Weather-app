import React from 'react';
import styled from 'styled-components';
import HighlightPanelWind from './HighlightPanelWind';
import HighlightPanelHumidity from './HighlightPanelHumidity';
import HighlightPanel from './HighlightPanel';
const StyledPanelsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-bottom: 1.5rem;
  max-width: 100%;
  justify-content: center;
  @media screen and (min-width: 1120px) {
    width: 100%;
    margin-top: 0.275rem;
  }
  @media screen and (min-width: 1440px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

const HighlightsPanels = ({ data }) => {
  return (
    <StyledPanelsContainer>
      <HighlightPanelWind
        value={data.current.wind_speed}
        windDeg={data.current.wind_deg}
      />
      <HighlightPanelHumidity value={data.current.humidity} />
      <HighlightPanel
        title={'Visibility'}
        value={`${data.current.visibility / 1000} km`}
      />
      <HighlightPanel
        title={'Air pressure'}
        value={`${data.current.pressure} hPa`}
      />
    </StyledPanelsContainer>
  );
};

export default HighlightsPanels;
