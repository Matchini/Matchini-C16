import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Home />
          <Nav />
        </div>
        <div className="float-right">
          <Login />
        </div>
        <div className="float-left">
          <Register />
          {/* <UpdateProfile /> */}
        </div>
      </div>
    );
  }
}

export default App;
