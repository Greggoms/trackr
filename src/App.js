import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import GameList from "./components/GameList";
import GamePage from "./pages/GamePage";

const AppWrapper = styled.div`
  text-align: center;
  background-color: #282c34;
`;

function App() {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/games" exact component={GameList} />
          <Route path="/games/:id" component={GamePage} />
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;
