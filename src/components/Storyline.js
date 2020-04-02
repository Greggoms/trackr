import React from "react";
import styled from "styled-components";

const Storyline = props => {
  return (
    <StorylineContainer>
      <h3>Storyline</h3>
      <hr />
      <p>{props.description_raw}</p>
    </StorylineContainer>
  );
};

////////////////////////////////////////////////////
////////// STYLES USING STYLED COMPONENTS //////////
////////////////////////////////////////////////////

const StorylineContainer = styled.section`
  grid-area: storyline;
  max-width: 800px;
  margin: 35px auto 0 auto;
  padding: 15px;
  @media only screen and (min-width: 480px) {
    padding: 25px;
  }
  @media only screen and (min-width: 1200px) {
    margin: 30px 60px 60px 0;
    background: rgba(51, 51, 51, 0.5);
    border-radius: 20px 10px 0 0;
    font-size: 18pt;
  }

  h3 {
  }

  p {
    hyphens: none;
    line-height: 40px;
  }
`;

export default Storyline;
