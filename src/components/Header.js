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

const HeaderContainer = styled.header`
  background: #313640;

  h1 {
    color: #f9f9f9;
    text-align: left;
    margin: 0 0 0 30px;
  }

  a {
    text-decoration: none;
  }
`;

const mapSizesToProps = ({ width }) => ({
  isTablet: width >= 480
});

export default withSizes(mapSizesToProps)(Header);
