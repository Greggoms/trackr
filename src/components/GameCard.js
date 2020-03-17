import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div``;

function GameCard() {
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
        const game = data.results.map((result, index) => (
          <p key={index}>{result.name}</p>
        ));
        setGameList(game);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return <div>{gamelist}</div>;
}

export default GameCard;
