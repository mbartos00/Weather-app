import React from 'react';
import styled from 'styled-components';

const StyledDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #88869d;
`;
const StyledTitle = styled.h4`
  margin-right: 1.5rem;
`;
const StyledText = styled.h4`
  margin-left: 1.5rem;
`;
const StyledDot = styled.span`
  width: 3px;
  aspect-ratio: 1;
  border-radius: 100vh;
  background: #88869d;
`;

const AsideDate = () => {
  return (
    <StyledDate>
      <StyledTitle>Today</StyledTitle>
      <StyledDot></StyledDot>
      <StyledText>Fri, 5 Jun</StyledText>
    </StyledDate>
  );
};

export default AsideDate;
