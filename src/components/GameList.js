import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GameCard from "./GameCard";

function GameList() {
  /*
  I need these two useState calls for my http request.
  --> gameList will hold an array of game objects holding the data I need to render.
  --> loading will display a message/loader while the data is being fetched.
  */
  const [gameList, setGameList] = useState([]);
  const [loading, setLoading] = useState(false);

  /* 
  setLoading useState used to make sure the game page doesnt appear until the data has been pulled into state.
  I didnt like the page appearing broken for a second before populating itself with content.
  */
  const fetchItems = async () => {
    // Display loader
    setLoading(true);
    // Get data
    const data = await fetch(
      "https://api.rawg.io/api/games?key=838ad08150554e389bcd764ebfcc48b3",
      {
        method: "GET"
      }
    );
    // Make data usable
    const items = await data.json();
    // Set data to gameList state
    setGameList(items.results);
    // Remove the loader from screen and display the content.
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Loading>Loading...</Loading>
  ) : (
    /*
    --> I need to map through the gameList array from state to render a list of game objects.
    --> I'm destructuring the values available to me to pass the data as props in GameCard
    */
    <GamesInfo>
      {gameList.map(
        ({
          id,
          slug,
          metacritic,
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
              metacritic={metacritic}
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

////////////////////////////////////////////////////
////////// STYLES USING STYLED COMPONENTS //////////
////////////////////////////////////////////////////

const GamesInfo = styled.main`
  background-color: #282c34;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  grid-gap: 20px;

  padding: 10px;
  margin-top: 25px;

  a {
    text-decoration: none;
  }
`;

const Loading = styled.h2`
  color: #f9f9f9;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default GameList;
