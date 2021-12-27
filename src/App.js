import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Commercial from "./components/Commercial";
import CommercialSec from "./components/CommercialSec";
import CommercialThird from "./components/CommercialThird";

const App = () => {
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
          <Route path="/commercialsec" exact>
            <CommercialSec />
          </Route>
          <Route path="/commercialthird" exact>
            <CommercialThird />
          </Route>
          <LandingPage />
          <Footer />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
