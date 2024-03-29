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
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 1120px) {
    flex-direction: row;

    margin-top: 2.6rem;
    margin-inline: 2rem;
  }
`;
const StyledError = styled.p`
  font-size: 0.9rem;
  color: #ff00006e;
  margin-top: 1rem;
  margin-inline: 1rem;
  @media screen and (min-width: 1120px) {
    text-align: center;
  }
`;

const AsideHeader = ({ setNewData, error }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpen = isOpen => {
    setIsNavOpen(isOpen);
  };

  return (
    <StyledHeader>
      <Nav
        setNewData={setNewData}
        isOpen={isNavOpen}
        setIsOpen={handleNavOpen}
      />
      <StyledButtonContainer>
        <HeaderButtons onNavOpen={handleNavOpen} />
        {error.code === 1 && (
          <StyledError>
            {error.message}. You can still search weather by city.
          </StyledError>
        )}
      </StyledButtonContainer>
    </StyledHeader>
  );
};

export default AsideHeader;
