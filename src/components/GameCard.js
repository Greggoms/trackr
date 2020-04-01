import React, { useState } from "react";
import styled from "styled-components";

function GameCard(props) {
  const [active, setActive] = useState(false);

  return (
    <GameContainer
      key={props.id}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
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
      {/* <img src={props.image} alt={props.name} /> */}
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
