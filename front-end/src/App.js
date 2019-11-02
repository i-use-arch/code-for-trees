import React, { Component } from "react";
import Splash from "./pages/Splash";
import Problems from "./pages/Problems";
import "./styles/main.scss";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Splash />
        <Problems />
      </div>
    );
  }
}

export default App;
