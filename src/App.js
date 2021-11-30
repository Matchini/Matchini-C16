import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
// import Nav from "./components/Nav";
class App extends Component {
  render() {
    return (
      <div>
        <Home />
        {/* <Nav /> */}
        <Login />
      </div>
    );
  }
}

export default App;
