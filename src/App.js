import React from "react";
import Projects from "./Components/Pages/Projects";
import Education from "./Components/Pages/Education";
import About from "./Components/Pages/About";
import Navbar from "./Components/Navigation/Navbar";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* Route Setup */}
        <Route exact path="/" component={Projects} />
        <Route path="/education" component={Education} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
