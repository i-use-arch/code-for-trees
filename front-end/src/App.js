import React, { Component } from "react";
import Splash from "./pages/Splash";
import Problems from "./pages/Problems";
import Navbar from "./components/Navbar";
import "./styles/main.scss";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        {/* <Splash /> */}
        <Problems />
      </div>
    );
  }
}

export default App;
