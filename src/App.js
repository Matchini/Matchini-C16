import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
// import Nav from "./components/Nav";
class App extends Component {
  render() {
    return (
      <div className="grid grid-cols-4">
        <div className="col-span-4">
          <Home />
          {/* <Nav /> */}
        </div>
        {/* <div className="float-right">
          <Login />
        </div> */}
        <div className="col-start-3 col-end-5 flex">
          <Register />
        </div>
      </div>
    );
  }
}

export default App;
