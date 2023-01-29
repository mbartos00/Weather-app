import React from 'react';
import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  
	0% {
		box-shadow: 0 4rem 0 -.2rem #e7e7eb;
	}
	100% {
		box-shadow: 0 2rem 0 -.2rem #e7e7eb;
	}

`;

const StyledLoader = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  box-shadow: 0 1rem 0 -0.2rem #e7e7eb;
  position: relative;
  background: transparent;
  animation: ${loading} 0.5s ease-in-out alternate infinite;
  animation-delay: 0.32s;
  &:after,
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    box-shadow: inherit;
    animation: inherit;
  }
  &:before {
    left: -2.5rem;
    animation-delay: 0.48s;
  }
  &:after {
    right: -2.5rem;
    animation-delay: 0.16s;
  }
`;

const Loader = () => {
  return <StyledLoader></StyledLoader>;
};

export default Loader;
