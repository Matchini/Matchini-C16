import React, { Component } from "react";
// import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
// import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Commercial from "./components/Commercial";
// 215341427022-qpsrq4730unqiq2v0e0eci2valevqr1b.apps.googleusercontent.com
class App extends Component {
  render() {
    return (
      <div className="bg-gray-100">
        <Home />

        <Router>
          <Switch>
            <Route path="/Register" exact>
              <Register />
            </Route>
            <Route path="/Login" exact>
              <Login />
            </Route>

            <Route path="/LandingPage" exact>
              <LandingPage />
            </Route>
            <Route path="/commercial" exact>
              <Commercial />
            </Route>
            <LandingPage />
            <Footer />
          </Switch>
        </Router>
      </div>
      // </div>
    );
  }
}

export default App;
