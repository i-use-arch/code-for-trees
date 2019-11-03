import React, { Component } from "react";
import { Link } from "react-router-dom";

class Splash extends Component {
  render() {
    return (
      <div id="splash">
        <div className="text-container">
          <h1>#CODE FOR TREES</h1>
          <p>
            Help us plant 20 million trees around the globe by January 1st,
            2020.
          </p>
          <Link to="/Problems">
            <button className="login-button">PROBLEMS</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Splash;
