import React from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import GameList from "./components/GameList";

const AppWrapper = styled.div`
  text-align: center;
  background-color: #282c34;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <GameList />
    </AppWrapper>
  );
}

export default App;
