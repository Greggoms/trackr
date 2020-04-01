import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DesktopNav = () => {
  return (
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
  );
};

////////////////////////////////////////////////////
////////// STYLES USING STYLED COMPONENTS //////////
////////////////////////////////////////////////////

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

export default DesktopNav;
