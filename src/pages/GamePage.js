import React, { useState, useEffect } from "react";
import styled from "styled-components";
// withSizes described in App.js
import withSizes from "react-sizes";

import Hero from "../components/Hero";
import Details from "../components/Details";
import ExternalLinks from "../components/ExternalLinks";
import Storyline from "../components/Storyline";

/*
--> match is a vital piece of the puzzle. Whenever I use react-router-doms <Link> (GameList.js in this case [line 57]), 
I get a special prop called match. Match allows me to keep the urls consistent between api calls. 
This is important because I have to make a call to the api when GameList.js loads, and another time when 
a game is selected causing GamePage.js to load.
*/
function GamePage({ match }) {
  /*
  --> Note that useState uses empty object as default here. That's because this api call returns a
  single game object with key:value pairs instead of an array of objects.
  */
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(false);
  /*
--> setLoading useState used to make sure the game page doesnt appear until the data has been pulled into state.
I didnt like the page appearing broken for a second before populating itself with content.
--> Here we see match in action. one of the values I can access with match is params. params holds valuable
info, such as an id. This id holds the games slug used in the url (ex. "the-witcher-3-wild-hunt").
*/
const key = process.env.REACT_APP_API_KEY;
console.log(key)
  const fetchItems = async () => {
    // Show loader
    setLoading(true);
    // Gather data and store it in a var called data
    const data = await fetch(
      `https://api.rawg.io/api/games/${match.params.id}?key=${key}`,
      {
        method: "GET"
      }
    );
    // Make data readable
    const items = await data.json();
    // Store data to stata
    setGame(items);
    // Hide loader
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line
  }, []);

  /*
  --> Extracting (destructuring) the properties as I need from the API. game is the value stored in state (the game's properties).
  --> esrb_rating and clip assigned to empty object because the values I need are stored inside those objects. Not actually sure why this works, but I won't complain.
  */
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
      <Hero
        background_image={background_image}
        dominant_color={dominant_color}
        name={name}
      />
      <Details
        metacritic={metacritic}
        released={released}
        game_series_count={game_series_count}
        esrb_rating={esrb_rating}
      />
      {clip && <video
        src={clip.clip}
        type="video/mp4"
        controls
        poster={background_image_additional}
      />}
      
      <ExternalLinks website={website} reddit_url={reddit_url} />
      <Storyline description_raw={description_raw} />
    </GamePageContainer>
  );
}

////////////////////////////////////////////////////
////////// STYLES USING STYLED COMPONENTS //////////
////////////////////////////////////////////////////

// part of withSizes
const mapSizesToProps = ({ width }) => ({
  isTablet: width < 650
});

const GamePageContainer = styled.main`
  padding: 0;
  color: #f9f9f9;

  display: grid;
  grid:
    "hero" 65vw
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

// part of withSizes
export default withSizes(mapSizesToProps)(GamePage);
