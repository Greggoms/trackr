import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import cta_background from "../img/cta_background.svg";

const Home = () => {
  return (
    <HomePageContainer>
      <CTA>
        <h2>The Gaming Encyclopedia</h2>
        <Link to="/games">Check out the colletion!</Link>
      </CTA>

      <Features>
        <Feature>
          <FontAwesomeIcon icon={faReact} spin />
          <h3>
            Made with <a href="https://reactjs.org/">React</a>
          </h3>
          <p>
            Your experience will be seamless. React focuses on client side
            rendering. This means that your internet does a LOT less work to
            load your website.
          </p>
        </Feature>
        <Feature>
          <FontAwesomeIcon icon={faDatabase} spin />
          <h3>
            Using{" "}
            <a href="https://rapidapi.com/accujazz/api/rawg-video-games-database?endpoint=apiendpoint_e4e2766f-1422-4b88-bd10-22acdb7c9a16">
              Rapid API's
            </a>{" "}
            Database
          </h3>
          <p>
            Rapid API offers loads of free APIs. This gaming one is spotty, but
            it has given me a lot of good practice. Maybe I'll even turn it into
            a real app with a better database (no offense rawg).
          </p>
        </Feature>
      </Features>
    </HomePageContainer>
  );
};

const HomePageContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const CTA = styled.div`
  height: 30vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-size: cover;
  background-image: url(${cta_background});
  background-repeat: no-repeat;
  background-position: center;
  padding: 35px;

  h2 {
    color: #f9f9f9;
  }

  a {
    color: orange;
    border: 2px solid orange;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 10px;
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
  }
`;

const Features = styled.article`
  display: grid;
  justify-content: center;
  grid-row-gap: 30px;
  grid-column-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  width: 100%;
  max-width: 900px;
  align-self: center;
`;

const Feature = styled.section`
  display: grid;
  grid:
    [row1-start] "heading icon" 50px [row1-end]
    [row2-start] "info info" min-content [row2-end]
    / 1fr min-content;
  background-image: linear-gradient(
    to right bottom,
    rgba(217, 149, 89, 0.2),
    rgba(43, 123, 140, 0.1)
  );
  padding: 15px;
  color: #f9f9f9;

  h3 {
    grid-area: heading;
    grid-row: 1;
    grid-column: 1 / -1;
    z-index: 1;

    a {
      color: #59c1d9;
    }
  }

  p {
    grid-area: info;
    grid-row: 2;
    grid-column: 1 / -1;
    z-index: 1;
  }
  svg {
    grid-area: icon;
    font-size: 80pt;
    margin-right: 20px;
  }

  .fa-react {
    animation: rotate 60s linear infinite;
    color: rgba(89, 193, 217, 0.4);
  }

  .fa-database {
    animation: sway 3s linear infinite;
    color: rgba(89, 193, 217, 0.4);
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes sway {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(-1deg);
    }
    50% {
      transform: rotate(1deg);
    }
    100% {
      transform: rotate(0);
    }
  }
`;

export default Home;
