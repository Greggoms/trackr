import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutPageContainer>
      <h1>About Trackr</h1>
      <p>
        Trackr is a webapp that can be used to find more information about a
        list of games. The list of games comes from{" "}
        <a href="https://rapidapi.com/accujazz/api/rawg-video-games-database?endpoint=apiendpoint_e4e2766f-1422-4b88-bd10-22acdb7c9a16">
          RapidAPI's
        </a>{" "}
        game database.
      </p>
      <p>
        This webapp is meant for portfolio purposes. After watching hours of
        tutorials, it's time to cement some knowledge.
      </p>
      <p>
        Feel free to snoop around the code located on my{" "}
        <a href="https://github.com/Greggoms/trackr">Github page</a>
      </p>
    </AboutPageContainer>
  );
};

////////////////////////////////////////////////////
////////// STYLES USING STYLED COMPONENTS //////////
////////////////////////////////////////////////////

const AboutPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  color: #f9f9f9;
  padding: 0 20px;
  max-width: 500px;
  margin: 0 auto;

  h1 {
    align-self: center;
  }

  a {
    color: #59c1d9;
  }
`;

export default About;
