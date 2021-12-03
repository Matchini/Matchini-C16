import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
// import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      // <div>
      //   <div>
      //     <Home />
      //     {/* <Nav /> */}
      //   </div>
      //   <div className="float-right">
      //     <Login />
      //   </div>
      //   <div className="float-left">
      //     <Register />
      //   </div>
      // </div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    );
  }
}

export default App;
