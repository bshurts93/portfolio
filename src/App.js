import React from "react";
import Landing from "./Components/Pages/Landing";
import Projects from "./Components/Pages/Projects";
import Education from "./Components/Pages/Education";
import About from "./Components/Pages/About";
import NavMenu from "./Components/Navigation/NavMenu";
import TopBar from "./Components/Navigation/TopBar";
import { BrowserRouter, Route } from "react-router-dom";
// Material UI Components

import "./App.css";

class App extends React.Component {
  state = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    let currentState = this.state.isMenuOpen;
    this.setState({ isMenuOpen: !currentState });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <TopBar toggleMenu={this.toggleMenu} />
          <NavMenu
            isOpen={this.state.isMenuOpen}
            toggleMenu={this.toggleMenu}
          />

          {/* Route Setup */}
          <Route exact path="/" component={Landing} />
          <Route path="/projects" component={Projects} />
          <Route path="/education" component={Education} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
