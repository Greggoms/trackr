import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GameCard from "./GameCard";

const GamesInfo = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-items: center;
  grid-gap: 20px;

  padding: 10px;
`;

function GameList() {
  const [gameInfo, setGameInfo] = useState([]);

  useEffect(() => {
    fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "a00e389c9bmsh5840137eb270ffep11feabjsn89b37f0109f9"
      }
    })
      .then(res => res.json())
      .then(data => {
        const game = data.results;
        setGameInfo(game);
        console.log(game);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <GamesInfo>
      {gameInfo.map(
        ({
          id,
          name,
          background_image: image,
          rating,
          rating_top,
          ratings_count
        }) => (
          <GameCard
            id={id}
            name={name}
            image={image}
            rating={rating}
            rating_top={rating_top}
            ratings_count={ratings_count}
          />
        )
      )}
    </GamesInfo>
  );
}

export default GameList;
