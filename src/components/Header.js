import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: #313640;
  padding: 0 50px;

  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;

  h1 {
    margin: 0;
    color: #f9f9f9;
  }

  a {
    text-decoration: none;
  }
`;

const NavContainer = styled.nav`
  display: flex;

  ul {
    margin: 0;
    list-style-type: none;

    display: flex;
    justify-content: space-between;
  }

  a {
    color: #f9f9f9;
    margin-left: 30px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <h1>Trackr</h1>
      </Link>
      <NavContainer>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
