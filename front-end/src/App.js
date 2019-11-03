import React, { Component } from "react";
import Splash from "./pages/Splash";
import Problem from "./pages/Problem";
import Problems from "./pages/Problems";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles/main.scss";

class App extends Component {
  state = {};
  render() {
    return (
      // <Router>
      //   <div className="App">
      //     <nav>
      //       <Problems />
      //     </nav>

      //     <Switch>
      //       <Route path="/Two-Sum">
      //         <Problem />
      //       </Route>
      //     </Switch>
      //   </div>
      // </Router>
      <div className="App">
        <Problems />
      </div>
    );
  }
}

export default App;
