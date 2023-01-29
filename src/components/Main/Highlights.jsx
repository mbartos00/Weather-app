import React from 'react';
import styled from 'styled-components';
import HighlightsPanels from './HighlightsPanels';

const StyledHighlightsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 1.2rem;
  gap: 1.7rem;
  z-index: 1;
  @media screen and (max-width: 1120px) {
    flex-direction: column;
  }
`;
const StyledHighlightsTitle = styled.h3`
  font-size: 1.5rem;
  @media screen and (max-width: 1120px) {
    margin: 0 auto;
    width: fit-content;
  }
`;
const Highlights = ({ data }) => {
  return (
    <StyledHighlightsContainer>
      <StyledHighlightsTitle>Today's Highlights</StyledHighlightsTitle>
      <HighlightsPanels data={data} />
    </StyledHighlightsContainer>
  );
};

export default Highlights;
