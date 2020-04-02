import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGamepad,
  faQuestion
} from "@fortawesome/free-solid-svg-icons";

const MobileNav = () => {
  // useState activeNav used to handle hamburger navigation toggle.
  const [activeNav, setActiveNav] = useState(false);
  return (
    // Using a fragment here because this nav will be absolutely positioned and shouldn't interfere with the main grid layout.
    <>
      {/* onClick to toggle true/false */}
      <Hamburger onClick={() => setActiveNav(!activeNav)}>
        <TopBar
          style={
            activeNav
              ? { transform: "rotateZ(45deg) translate(10px, 0)" }
              : { transform: "rotateZ(-45deg) translate(-10px, 0)" }
          }
        />
        <MidBar
          style={
            activeNav
              ? { transform: "rotateY(0)" }
              : { transform: "rotateY(180deg)" }
          }
        />
        <BottomBar
          style={
            activeNav
              ? { transform: "rotateZ(-45deg) translate(10px, 0)" }
              : { transform: "rotateZ(45deg) translate(-10px, 0)" }
          }
        />
      </Hamburger>
      <MobileNavContainer
        style={activeNav ? { left: "0%" } : { left: "100vw" }}
      >
        <Overlay
          onClick={() => setActiveNav(false)}
          style={
            activeNav
              ? { opacity: 1, background: "rgba(255, 255, 255, 0.2)" }
              : { opacity: 0, background: "rgba(255, 255, 255, 0)" }
          }
        />
        {activeNav && (
          <MobileNavContent>
            <ul>
              <li>
                <Link to="/" onClick={() => setActiveNav(false)}>
                  <>
                    <p>Home</p>
                    <FontAwesomeIcon icon={faHome} />
                  </>
                </Link>
              </li>
              <li>
                <Link to="/games" onClick={() => setActiveNav(false)}>
                  <>
                    <p>Games</p>
                    <FontAwesomeIcon icon={faGamepad} />
                  </>
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setActiveNav(false)}>
                  <>
                    <p>About</p>
                    <FontAwesomeIcon icon={faQuestion} />
                  </>
                </Link>
              </li>
            </ul>
          </MobileNavContent>
        )}
      </MobileNavContainer>
    </>
  );
};

////////////////////////////////////////////////////
////////// STYLES USING STYLED COMPONENTS //////////
////////////////////////////////////////////////////

const Overlay = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  transition: all 2s 0.5s ease;
`;

const barPresets = {
  height: "3px",
  background: "#333",
  border: "1px solid white",

  transition: "all .2s ease"
};

const TopBar = styled.span`
  ${barPresets}
  width: 12px;
`;
const MidBar = styled.span`
  ${barPresets}
  width: 25px;
  margin: 6px 0;
  overflow: hidden;
  z-index: 102;
`;
const BottomBar = styled.span`
  ${barPresets}
  width: 12px;

  transform: rotateZ(45deg) translate(-10px, 2px);
`;

const Hamburger = styled.div`
  cursor: pointer;
  position: fixed;
  right: 20px;
  top: 20px;
  background: rgba(30, 30, 40, 0.8);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 101;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MobileNavContainer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;

  display: grid;
  grid-template-columns: 1fr 1fr;

  transition: all 0.2s ease-out;
`;

const MobileNavContent = styled.nav`
  grid-column: 2;
  z-index: 1;
  padding-top: 100px;
  text-align: right;
  background-image: linear-gradient(
    to left,
    rgba(40, 44, 52, 1),
    rgba(40, 44, 52, 1),
    rgba(40, 44, 52, 0.9),
    rgba(40, 44, 52, 0.9),
    rgba(40, 44, 52, 0)
  );

  ul {
    list-style-type: none;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    margin-bottom: 40px;

    p {
      margin: 0;
    }
  }

  a {
    color: #f9f9f9;
    font-size: 12pt;
    text-decoration: none;

    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    transition: all 0.2s ease;

    &:hover {
      color: orange;
    }
  }

  svg {
    margin-left: 5px;
    height: 30px;
    width: 30px !important;
  }
`;

export default MobileNav;
