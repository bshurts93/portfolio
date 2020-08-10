import React from "react";
import Landing from "./Components/Pages/Landing";
import Projects from "./Components/Pages/Projects";
import Education from "./Components/Pages/Education";
import About from "./Components/Pages/About";
import Navbar from "./Components/Navigation/Navbar";
import NavMenu from "./Components/Navigation/NavMenu";
import { BrowserRouter, Route } from "react-router-dom";
// Material UI Components
import Button from "@material-ui/core/Button";

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
          <Button variant="outlined" color="primary" onClick={this.toggleMenu}>
            Open full-screen dialog
          </Button>
          <Navbar />
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
