import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import classes from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Links from "./components/Links/Links";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Layout/Parts/Card";
import MockSourcesObject from "./mock/MockSourcesObject";
import Portfolio from "../src/components/Portfolio/Portfolio";
import WorkExperience from "./components/WorkEsperience/WorkExperience";
function App() {
  const Mock = MockSourcesObject;

  return (
    <div className={classes.mainBody}>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/Portfolio">
          <Portfolio />
        </Route>
        <Route path="/home" exact>
          <Banner />
          <About />
          <Card title={Mock.parts.names[0]} parts={Mock.parts.experience} />
          <Links title={Mock.parts.names[1]} parts={Mock.parts.links} />
          <Footer />
        </Route>
        <Route path={`/home/:cardId`}>
          <WorkExperience />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
