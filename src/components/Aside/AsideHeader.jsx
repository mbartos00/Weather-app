import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderButtons from './HeaderButtons';
import Nav from './Nav';

const StyledHeader = styled.header`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
`;
const StyledButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: inherit;
  justify-content: space-between;
  @media screen and (min-width: 1120px) {
    margin-top: 2.6rem;
    margin-inline: 2rem;
  }
`;

const AsideHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpen = isOpen => {
    setIsNavOpen(isOpen);
  };

  return (
    <StyledHeader>
      <Nav
        isOpen={isNavOpen}
        setIsOpen={handleNavOpen}
      />
      <StyledButtonContainer>
        <HeaderButtons onNavOpen={handleNavOpen} />
      </StyledButtonContainer>
    </StyledHeader>
  );
};

export default AsideHeader;
