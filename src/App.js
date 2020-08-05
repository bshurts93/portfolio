import React from "react";
import Projects from "./Projects.js";
import Education from "./Education.js";
import About from "./About.js";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Route Setup */}
        <Route exact path="/" component={Projects} />
        <Route path="/education" component={Education} />
        <Route path="/about" component={About} />

        <div className="navigation">
          {/* Replace with own logo */}
          {/* <img src={myLogo} className="logo" alt="Ben Shurts" /> */}
          <div className="navigation-sub">
            <Link to="/" className="item">
              Projects
            </Link>
            <Link to="/education" className="item">
              Education
            </Link>
            <Link to="/about" className="item">
              About
            </Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
