import React, { useState, useEffect } from "react";
import styled from "styled-components";

const GamePageContainer = styled.main`
  padding: 0;

  img {
    display: block;
    width: 100%;
  }
`;

function GamePage({ match }) {
  const [game, setGame] = useState({});

  useEffect(() => {
    fetch(
      `https://rawg-video-games-database.p.rapidapi.com/games/${match.params.id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
          "x-rapidapi-key": "a00e389c9bmsh5840137eb270ffep11feabjsn89b37f0109f9"
        }
      }
    )
      .then(res => res.json())
      .then(gameData => {
        console.log(gameData);
        setGame(gameData);
      })
      .catch(err => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  console.log(game);

  return (
    <GamePageContainer>
      <h3>{game.name}</h3>
      <img src={game.background_image} alt={game.name} />
    </GamePageContainer>
  );
}

export default GamePage;
