import React, { useState } from "react";
import styled from "styled-components";

const GameContainer = styled.div`
  max-width: 350px;
  height: 200px;
  overflow: hidden;

  display: grid;
  grid-template:
    "img"
    "info"
    / auto;

  img {
    display: block;
    width: 350px;
    height: 200px;
    grid-area: img;
    grid-row: 1 / -1;
  }
`;

const MoreInfo = styled.div`
  background-image: linear-gradient(
    to top,
    #333,
    rgba(51, 51, 51, 0.8),
    rgba(51, 51, 51, 0.5)
  );
  grid-area: info;
  grid-row: 2;
  z-index: 10;
  transition: all 0.3s ease-out;

  h2 {
    color: #f9f9f9;
    margin: 0;
  }

  h3 {
    color: #f9f9f9;
  }
`;

function GameCard(props) {
  const [active, setActive] = useState(false);
  return (
    <GameContainer
      key={props.id}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
      // onClick line for mobile users. may disable later
      onClick={() => setActive(!active)}
    >
      <img src={props.image} alt={props.name} />
      <MoreInfo
        style={{
          marginTop: active ? 0 : "165px"
        }}
      >
        <h2>{props.name}</h2>
        <h3>Rating - {props.rating} / 5</h3>
        <h3>{props.ratings_count} overall ratings</h3>
      </MoreInfo>
    </GameContainer>
  );
}

export default GameCard;
