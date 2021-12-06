import React, { Component } from "react";
// import "./App.css";
import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Nav from "./components/Nav";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
class App extends Component {
  render() {
    return (
      <div>
        <Home />
     
        <LandingPage />
        <Footer />
      </div>

    );
  }
}

export default App;
