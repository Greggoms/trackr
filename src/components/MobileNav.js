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
  const [activeNav, setActiveNav] = useState(false);
  return (
    <>
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
        style={activeNav ? { left: "50%" } : { left: "100vw" }}
      >
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

const barPresets = {
  height: "3px",
  background: "#333",
  border: "1px solid white",

  transition: "all .2s ease"
};

// Span.defaultProps = {
//   bar: {
//     top: "5",
//     mid: "10",
//     bottom: "5"
//   }
// };

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
  background-image: linear-gradient(
    to left,
    rgba(40, 44, 52, 1),
    rgba(40, 44, 52, 1),
    rgba(40, 44, 52, 0.9),
    rgba(40, 44, 52, 0.9),
    rgba(40, 44, 52, 0)
  );

  transition: all 0.2s ease-out;
`;

const MobileNavContent = styled.nav`
  margin-top: 100px;
  text-align: right;

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
