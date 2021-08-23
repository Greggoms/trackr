import React from "react";
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";

/*
withSizes adds responsiveness. Apparently almighty server-side rendering technology is unable to access
the width of the screen, so this guy made a sweet helper for it. https://github.com/renatorib/react-sizes
*/
import withSizes from "react-sizes";

import Home from "./pages/Home";
import GamePage from "./pages/GamePage";
import About from "./pages/About";
import Header from "./components/Header";
import GameList from "./components/GameList";
import MobileNav from "./components/MobileNav";
import "./App.css";

const AppWrapper = styled.div`
  text-align: inherit;
`;

function App(props) {
  return (
    <HashRouter>
      <AppWrapper>
        <Header />
        {/* I can use withSizes to conditionally render a component based on device width.
        I have tried using it to conditionally style to no avail. Sticking with regular ol media queries for now */}
        {props.isMobile && <MobileNav />}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/games" exact component={GameList} />
          <Route path="/games/:id" component={GamePage} />
        </Switch>
      </AppWrapper>
    </HashRouter>
  );
}

// Necessary for withSizes responsiveness to work. Changing the device width(s) will change the breakpoint in pixels.
const mapSizesToProps = ({ width }) => ({
  isMobile: width < 480
});

// Weird export necessary for withSizes to work.
export default withSizes(mapSizesToProps)(App);
