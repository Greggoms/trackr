import React, { useState, useEffect } from "react";
import styled from "styled-components";
// withSizes adds responsiveness. Apparently almighty server-side rendering technology is unable to acces the width of the screen, so this guy made a sweet helper for it. https://github.com/renatorib/react-sizes
import withSizes from "react-sizes";
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

function GamePage({ match }, props) {
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
    background_image,
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
    <GamePageContainer
      style={{
        backgroundImage: `url(${background_image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Hero>
        <img src={background_image} alt={name} />
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
        controls
        poster={background_image_additional}
      />

      <ExternalLinks>
        {website && (
          <div>
            <a href={website} target="_blank" rel="noopener noreferrer">
              <h3>
                <FontAwesomeIcon icon={faGlobe} />
              </h3>
              <p>
                Stay updated on their website!{" "}
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

      <StoryLine
        style={{
          hyphens: "none",
          lineHeight: "30px"
        }}
      >
        {description_raw}
      </StoryLine>
    </GamePageContainer>
  );
}

////////////////////////////////////////////////////
////////// STYLES USING STYLED COMPONENTS //////////
////////////////////////////////////////////////////

// Necessary for withSizes responsiveness to work. Changing the device width(s) will change the breakpoint in pixels.
const mapSizesToProps = ({ width }) => ({
  isTablet: width < 650
});

const GamePageContainer = styled.main`
  padding: 0;
  color: #f9f9f9;

  display: grid;
  grid:
    "hero" 60vw
    "details" min-content
    "video" min-content
    "external" min-content
    "storyline" min-content
    / 1fr;

  @media only screen and (min-width: 650px) {
    grid:
      "hero" 27vw
      "details" min-content
      "video" min-content
      "external" min-content
      "storyline" min-content
      / 1fr;
  }
  @media only screen and (min-width: 1200px) {
    grid:
      "hero hero" 8vw
      "details video" min-content
      "details external" min-content
      ". storyline" min-content
      / 500px 1fr;
    background-size: cover;
  }

  img {
    display: block;
    width: 100%;
  }
  video {
    grid-area: video;
    margin: 30px auto 0;
    width: 100%;
    max-width: 640px;

    @media only screen and (min-width: 1200px) {
      margin: 0;
      align-self: center;
    }
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
  grid-area: hero;
  display: grid;
  grid:
    "img" min-content
    "title" min-content
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
    animation: titleAppearMobile 2s ease-out forwards,
      titleBackground 2s 2s ease-out forwards;
    @media only screen and (min-width: 650px) {
      font-size: 48pt;
      margin: 0 20px;
      grid-row: 1;
      animation: titleAppearTablet 2s ease-out forwards,
        titleBackground 2s 2s ease-out forwards;
      margin-top: 0;
      height: 100%;
      text-align: left;
    }
  }

  @keyframes titleAppearMobile {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes titleAppearTablet {
    0% {
      transform: translateY(-50px);
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
  grid-area: details;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  text-align: left;

  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  section {
    width: 45%;
    max-width: 120px;
    height: 120px;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 50%;
    padding: 10px;

    transition: all 2s ease-out;

    @media only screen and (min-width: 1200px) {
      margin-bottom: 15px;
    }
    h3 {
      font-size: 30pt;
      margin: 0;
    }

    p {
      margin: 0;
    }

    @media only screen and (min-width: 650px) {
      background: rgba(51, 51, 51, 0.9);
    }
  }
  @media only screen and (min-width: 650px) {
    justify-content: space-evenly;
    align-items: center;
  }
  @media only screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

const ExternalLinks = styled.div`
  grid-area: external;
  display: flex;
  justify-content: space-around;
  text-align: center;

  @media only screen and (min-width: 1200px) {
    text-align: left;
    flex-direction: column;
  }

  div {
    width: 45%;
    @media only screen and (min-width: 1200px) {
      margin: 0 0 10px 0;
    }
  }

  h3 {
    font-size: 23pt;
    margin: 0;
  }

  p {
    margin: 5px 0;
  }

  a {
    color: #f9f9f9;
  }
`;

const StoryLine = styled.p`
  grid-area: storyline;
  max-width: 800px;
  margin: 0 auto;
  padding: 15px;
  @media only screen and (min-width: 480px) {
    padding: 50px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0;
    margin: 30px 0 0 0;
  }
`;

// Weird export necessary for withSizes to work.
export default withSizes(mapSizesToProps)(GamePage);
