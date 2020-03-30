import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";

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
        setGame(gameData);

        // console.log(clips);
      })
      .catch(err => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  console.log(game);

  // Extracting (destructuring) the properties as I need from the API. game is the value stored in state (the game's properties).
  const {
    name,
    background_image_additional,
    description_raw,
    dominant_color,
    game_series_count,
    metacritic,
    reddit_url,
    released,
    website,
    esrb_rating = {},
    clip = {}
  } = game;

  return (
    <GamePageContainer>
      <img src={background_image_additional} alt={name} />
      <h3 style={{ color: dominant_color }}>{name}</h3>
      <p>{esrb_rating.name}</p>
      <p>Released: {released}</p>
      <p>
        Get all the updates on <a href={website}>their website!</a>
      </p>
      <p>
        {game_series_count > 1 && `${game_series_count} games in this series!`}
      </p>
      <p>{metacritic} - Metacritic</p>

      <a href={reddit_url}>
        <FontAwesomeIcon icon={faRedditAlien} />
      </a>

      <video
        src={clip.clip}
        type="video/mp4"
        width="320"
        height="240"
        controls
      />
      <p>{description_raw}</p>
    </GamePageContainer>
  );
}

const GamePageContainer = styled.main`
  padding: 0;
  background: #282c34;
  color: #f9f9f9;

  img {
    display: block;
    width: 100%;
  }
`;

export default GamePage;
