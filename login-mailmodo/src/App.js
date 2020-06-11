import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavLink, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./components/Sign-in";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/login" component={SignIn}></Route>
          <Route path="/signup" component={SignUp}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
