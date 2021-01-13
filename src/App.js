import React, { Component } from "react"
import ReactDOM from "react-dom";
// import * as THREE from "three";

// import logo from './logo.svg';
import './App.css';

import Home from './components/Home';

class App extends Component {
  render() {

    return (
      <Home />
    )
  }

}
const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
export default App;
