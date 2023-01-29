import React from 'react';
import { StyledPanel, StyledTitle } from './HighlightPanelWind';

const HighlightPanel = ({ title, value }) => {
  return (
    <StyledPanel>
      <StyledTitle>{title}</StyledTitle>
      <h2>{value}</h2>
    </StyledPanel>
  );
};

export default HighlightPanel;
