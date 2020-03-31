import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GameCard from "./GameCard";

function GameList() {
  const [gameList, setGameList] = useState([]);

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
        const games = data.results;
        setGameList(games);
        console.log(games);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <GamesInfo>
      {gameList.map(
        ({
          id,
          slug,
          name,
          background_image,
          rating,
          rating_top,
          ratings_count,
          released
        }) => (
          <Link key={id} to={`/games/${slug}`}>
            <GameCard
              name={name}
              image={background_image}
              rating={rating}
              rating_top={rating_top}
              ratings_count={ratings_count}
              released={released}
              slug={slug}
            />
          </Link>
        )
      )}
    </GamesInfo>
  );
}

const GamesInfo = styled.main`
  background-color: #282c34;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  grid-gap: 20px;

  padding: 10px;
  margin-top: 25px;
`;

export default GameList;
