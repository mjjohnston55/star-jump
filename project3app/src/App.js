import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

import Nav from "./Components/Nav";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import MainApp from "./Components/MainApp";

import ABCApp from "./Components/GameModules/ABCApp";
import AnimalApp from "./Components/GameModules/AnimalApp";
import ClockApp from "./Components/GameModules/ClockApp";
import ColorApp from "./Components/GameModules/ColorApp";
import MathApp from "./Components/GameModules/MathApp";
import NumApp from "./Components/GameModules/NumApp";
import PlanetApp from "./Components/GameModules/PlanetApp";
import ShapeApp from "./Components/GameModules/ShapeApp";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/mainapp" component={MainApp} />

          <Route path="/abc" component={ABCApp} />
          <Route path="/animals" component={AnimalApp} />
          <Route path="/clock" component={ClockApp} />
          <Route path="/colors" component={ColorApp} />
          <Route path="/math" component={MathApp} />
          <Route path="/numbers" component={NumApp} />
          <Route path="/planets" component={PlanetApp} />
          <Route path="/shapes" component={ShapeApp} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page!</h1>
    <Link to="/SignUp">
    <h3>Sign Up</h3>
    </Link>
    <Link to="/Login">
    <h3>Login</h3>
    </Link>
    
  </div>
);

export default App;
