import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: #313640;

  h1 {
    margin-top: 0;
    color: #f9f9f9;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Trackr</h1>
    </HeaderContainer>
  );
};

export default Header;
