import React, { Component } from 'react';
import Splash from './pages/Splash';
import './styles/main.scss';

class App extends Component {
  state = {  }
  render() { 
    return (
      <div id="app">
        <Splash/>
      </div>
    );
  }
}


export default App;
