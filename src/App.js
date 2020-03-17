import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";

const AppWrapper = styled.div`
  text-align: center;
  background-color: #282c34;
`;

const GamesList = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-items: center;
  grid-gap: 20px;

  padding: 10px 50px;
`;
const GameContainer = styled.div`
  max-width: 350px;

  display: grid;
  grid-template:
    "img"
    "title"
    / auto;

  h2 {
    color: #f9f9f9;
    background-image: linear-gradient(
      to top,
      #333,
      rgba(51, 51, 51, 0.8),
      rgba(51, 51, 51, 0.5)
    );
    grid-area: title;
    grid-row: 2;
    z-index: 10;
    margin-bottom: 0;
  }

  img {
    display: block;
    width: 350px;
    height: 200px;
    grid-area: img;
    grid-row: 1 / -1;
  }
`;

function App() {
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
        console.log(data);
        const game = data.results.map(
          ({ id, name, background_image: image }) => (
            <GameContainer>
              <h2 key={id}>{name}</h2>
              <img src={image} alt={name} />
            </GameContainer>
          )
        );
        setGameList(game);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <AppWrapper>
      <GamesList>{gameList}</GamesList>
    </AppWrapper>
  );
}

export default App;
