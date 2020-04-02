import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import withSizes from "react-sizes";

import DesktopNav from "./DesktopNav";

const Header = props => {
  return (
    <HeaderContainer>
      <Link to="/">
        <h1>Trackr</h1>
      </Link>
      {props.isTablet && <DesktopNav />}
    </HeaderContainer>
  );
};

////////////////////////////////////////////////////
////////// STYLES USING STYLED COMPONENTS //////////
////////////////////////////////////////////////////

const HeaderContainer = styled.header`
  background: #313640;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding-bottom: 15px;

  h1 {
    color: #f9f9f9;
    text-align: left;
    margin: 0;
    flex-grow: 1;
  }

  a {
    text-decoration: none;
  }
`;

const mapSizesToProps = ({ width }) => ({
  isTablet: width >= 480
});

export default withSizes(mapSizesToProps)(Header);
