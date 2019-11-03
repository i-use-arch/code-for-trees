import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Splash from "./pages/Splash";
import Problems from "./pages/Problems";
import Problem from "./pages/Problem";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// ReactDOM.render(
//     <App />, document.getElementById('root')
// );

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Splash} />
      <Route path="/Problems" component={Problems} />
      <Route path="/Two-Sum" component={Problem} />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
