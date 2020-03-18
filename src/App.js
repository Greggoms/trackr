import React from "react";
import styled from "styled-components";
import "./App.css";
import GameList from "./components/GameList";

const AppWrapper = styled.div`
  text-align: center;
  background-color: #282c34;
`;

function App() {
  return (
    <AppWrapper>
      <GameList />
    </AppWrapper>
  );
}

export default App;
