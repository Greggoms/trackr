import React, { useState } from "react";
import styled from "styled-components";

function GameCard(props) {
  // useState for hover animation event
  const [active, setActive] = useState(false);

  return (
    <GameContainer
      key={props.id}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
      // I have the image set as a background here instead of in the styled component below for a reason. Put simply, it needs to be here to load "another copy" of the mobile image. My dynamic values aren't accessible inside a styled component. Out of scope I suppose. Disabling this on tablet and greater viewports (inspect empty spot on picture, background-image prop on <main> tag) would basically result in removing 80% of the picture, keeping the content in place. Honestly proud of myself for figuring this one out. Tried an approch using withSizes, but I don't think withSizes likes css.
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <MoreInfo
        style={{
          marginTop: active ? "100px" : "165px"
        }}
      >
        <h2>{props.name}</h2>
        <div className="rating">
          <h3>{props.rating} / 5</h3>
          <p>{props.ratings_count} ratings</p>
        </div>
        <div className="release">
          <h3>Release Date</h3>
          <p>{props.released}</p>
        </div>
      </MoreInfo>
    </GameContainer>
  );
}

////////////////////////////////////////////////////
////////// STYLES USING STYLED COMPONENTS //////////
////////////////////////////////////////////////////

const GameContainer = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
  text-align: center;

  display: grid;
  grid-template:
    "img"
    "info"
    / auto;
`;

const MoreInfo = styled.div`
  background-image: linear-gradient(
    to top,
    #333,
    rgba(51, 51, 51, 0.9),
    rgba(51, 51, 51, 0.9),
    rgba(51, 51, 51, 0.5)
  );
  grid-area: info;
  grid-row: 2;
  z-index: 10;
  transition: all 0.3s ease-out;

  display: grid;
  grid-template:
    "heading heading"
    "release rating"
    / 1fr 1fr;

  h2 {
    color: #f9f9f9;
    margin: 0 0 10px 0;
    grid-area: heading;
    border-bottom: 3px solid #333;
  }

  h3 {
    color: #f9f9f9;
    margin: 0;
  }
  .rating {
    grid-area: rating;
  }

  .release {
    grid-area: release;
  }

  p {
    margin: 0 0 5px 0;
    color: #f9f9f9;
  }
`;

export default GameCard;
