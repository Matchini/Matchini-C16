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

class App extends Component {
  render() {
    return (
      <div>
        <Home />

        <Router>
          <Switch>
            <Route path="/Register" exact>
              <div className="ml-12 mr-12 mb-12">
                <Register />
              </div>
            </Route>
            <Route path="/Login" exact>
              <div className="ml-12 mr-12">
                <Login />
              </div>
            </Route>

            <Route path="/LandingPage" exact>
              <LandingPage />
            </Route>
            <Route path="/Commercial" exact>
              <Commercial />
            </Route>

            {/* <div className="grid grid-cols-4 flex ">
          <div className="col-span-4">
          </div>
          <div className="col-start-1 col-end-3 ml-12 mr-12">
            <Register />
          </div> */}
            {/* <div className="col-start-1 col-end-3 h-max">
            <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5894361.jpg"/>
          </div> */}
            {/* <div className="col-start-3 col-end-5 ml-12 mr-12">
            <Login />
          </div>
        </div>
        <div> */}
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
