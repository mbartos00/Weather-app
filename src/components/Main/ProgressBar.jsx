import React from 'react';
import styled from 'styled-components';

const StyledProgressBar = styled.div`
  width: 100%;
  height: 0.5rem;

  border-radius: 20px;
  position: relative;
  background: #fff;
`;
const StyledFiller = styled.div`
  width: ${({ completed }) => completed};
  height: 100%;
  background-color: ${({ color }) => color};
  border-radius: inherit;
  text-align: right;
`;

const ProgressBar = ({ color, completed }) => {
  return (
    <StyledProgressBar>
      <StyledFiller
        color={color}
        completed={`${completed}%`}
      ></StyledFiller>
    </StyledProgressBar>
  );
};

export default ProgressBar;
