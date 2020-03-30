import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
// withSizes adds responsiveness. Apparently almighty server-side rendering technology is unable to acces the width of the screen, so this guy made a sweet helper for it. https://github.com/renatorib/react-sizes
import withSizes from "react-sizes";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import GameList from "./components/GameList";
import GamePage from "./pages/GamePage";
import MobileNav from "./components/MobileNav";
import "./App.css";

const AppWrapper = styled.div`
  text-align: center;
`;

function App(props) {
  return (
    <Router>
      <AppWrapper>
        <Header />
        {props.isMobile && <MobileNav />}
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

// Necessary for withSizes responsiveness to work. Changing the device width(s) will change the breakpoint in pixels.
const mapSizesToProps = ({ width }) => ({
  isMobile: width < 480
});

// Weird export necessary for withSizes to work.
export default withSizes(mapSizesToProps)(App);
