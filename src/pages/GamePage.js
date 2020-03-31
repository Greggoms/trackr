import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import {
  faLayerGroup,
  faThumbsUp,
  faCalendarAlt,
  faPuzzlePiece,
  faGlobe,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";

function GamePage({ match }) {
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line
  }, []);

  // setLoading useSate used to make sure the game page doesnt appear until the data has been pulled into state. I didnt like the page appearing broken for a second before populating itself with content.
  const fetchItems = async () => {
    setLoading(true);
    const data = await fetch(
      `https://rawg-video-games-database.p.rapidapi.com/games/${match.params.id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
          "x-rapidapi-key": "a00e389c9bmsh5840137eb270ffep11feabjsn89b37f0109f9"
        }
      }
    );
    const items = await data.json();
    setGame(items);
    setLoading(false);
  };

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

  return loading ? (
    <Loading>Loading...</Loading>
  ) : (
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
          <div>
            <a href={website} target="_blank" rel="noopener noreferrer">
              <h3>
                <FontAwesomeIcon icon={faGlobe} />
              </h3>
              <p>
                Stay updated from their website!{" "}
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </p>
            </a>
          </div>
        )}

        {reddit_url && (
          <div>
            <a href={reddit_url} target="_blank" rel="noopener noreferrer">
              <h3>
                <FontAwesomeIcon icon={faRedditAlien} />
              </h3>
              <p>
                View the Community! <FontAwesomeIcon icon={faExternalLinkAlt} />
              </p>
            </a>
          </div>
        )}
      </ExternalLinks>

      <p
        style={{
          padding: "20px 10px",
          hyphens: "none",
          lineHeight: "30px"
        }}
      >
        {description_raw}
      </p>
    </GamePageContainer>
  );
}

////////////////////////////////////////////////////
////////// STYLES USING STYLED COMPONENTS //////////
////////////////////////////////////////////////////

const GamePageContainer = styled.main`
  padding: 0;
  background: #282c34;
  color: #f9f9f9;

  display: flex;
  flex-direction: column;

  img {
    display: block;
    width: 100%;
  }
`;

const Loading = styled.h2`
  color: #f9f9f9;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
    text-align: center;

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
  justify-content: space-around;
  text-align: center;

  div {
    width: 45%;
  }

  h3 {
    font-size: 23pt;
    margin-bottom: 0;
  }

  p {
    margin: 5px 0;
  }

  a {
    color: #f9f9f9;
  }
`;

export default GamePage;
