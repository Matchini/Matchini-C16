import React, { Component } from "react";
// import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
// import Nav from "./components/Nav";
class App extends Component {
  render() {
    return (
      <div className="grid grid-cols-4 flex ">
        <div className="col-span-4">
          <Home />
          {/* <Nav /> */}
        </div>
        {/* <div className="float-right">
          <Login />
        </div> */}
        <div className="col-start-1 col-end-3 h-max">
            <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5894361.jpg"/>
          </div>
        <div className="col-start-3 col-end-5 ml-12 mr-12">      
          <Register />
        </div>
      </div>
    );
  }
}

export default App;
