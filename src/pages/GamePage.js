import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import {
  faLayerGroup,
  faThumbsUp,
  faCalendarAlt,
  faPuzzlePiece
} from "@fortawesome/free-solid-svg-icons";

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
      .then(gameData => setGame(gameData))
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
      <Hero>
        <img src={background_image_additional} alt={name} />
        <h3 style={{ color: dominant_color }}>{name}</h3>
      </Hero>

      <Details>
        <section>
          <h3>
            <FontAwesomeIcon icon={faThumbsUp} />
          </h3>
          <p>{`${metacritic}% ${
            metacritic >= 90 ? "(Mostly Positive)" : "(Positive)"
          }`}</p>
        </section>
        <section>
          <h3>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </h3>{" "}
          <p>{released}</p>
        </section>

        {game_series_count > 1 && (
          <section>
            <h3>
              <FontAwesomeIcon icon={faLayerGroup} />
            </h3>
            <p>{game_series_count} other titles!</p>
          </section>
        )}

        {esrb_rating && (
          <section>
            <div>
              <h3>
                <FontAwesomeIcon icon={faPuzzlePiece} />
              </h3>
              <p>{esrb_rating.name}</p>
            </div>
          </section>
        )}
      </Details>

      <video
        src={clip.clip}
        type="video/mp4"
        width="320"
        height="240"
        controls
      />

      <ExternalLinks>
        {website && (
          <p>
            Get all the updates on <a href={website}>their website!</a>
          </p>
        )}

        {reddit_url && (
          <a href={reddit_url}>
            <FontAwesomeIcon icon={faRedditAlien} />
          </a>
        )}
      </ExternalLinks>

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

const Hero = styled.div`
  display: grid;
  grid:
    [row1-start] "img" min-content [row1-end]
    [row2-start] "title" min-content [row2-end]
    / auto;

  overflow: hidden;

  img {
    grid-area: img;
    grid-row: 1 / -1;
  }

  h3 {
    font-size: 23pt;
    margin-bottom: 0;
    text-align: center;
    width: 100%;

    grid-area: title;
    grid-row: 1 / -1;
    justify-self: center;
    align-self: end;
    animation: titleAppear 2s ease-out forwards,
      titleBackground 2s 2s ease-out forwards;
  }

  @keyframes titleAppear {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes titleBackground {
    0% {
      background: rgba(179, 130, 21, 0);
    }
    100% {
      background: rgba(179, 130, 21, 0.4);
    }
  }
`;

const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  text-align: left;

  section {
    width: 45%;
    max-width: 175px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 30pt;
      margin-bottom: 12px;
    }

    p {
      margin: 0;
    }
  }
`;

const ExternalLinks = styled.div`
  display: flex;
`;

export default GamePage;
