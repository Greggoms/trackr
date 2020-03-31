import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GameCard from "./GameCard";

function GameList() {
  const [gameList, setGameList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line
  }, []);

  // setLoading useSate used to make sure the game page doesnt appear until the data has been pulled into state. I didnt like the page appearing broken for a second before populating itself with content.
  const fetchItems = async () => {
    setLoading(true);
    const data = await fetch(
      "https://rawg-video-games-database.p.rapidapi.com/games",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
          "x-rapidapi-key": "a00e389c9bmsh5840137eb270ffep11feabjsn89b37f0109f9"
        }
      }
    );
    const items = await data.json();
    setGameList(items.results);
    setLoading(false);
  };

  return loading ? (
    <Loading>Loading...</Loading>
  ) : (
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

const Loading = styled.h2`
  color: #f9f9f9;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default GameList;
