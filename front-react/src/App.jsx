import React from "react";
import { Route } from "react-router-dom";
import classes from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
// import Portfolio from "./components/Portfolio/Portfolio";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
// import OngoingSites from "./components/WorkEsperience/OngoingSites/OngoingSites";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Layout/Parts/Card";
import MockSourcesObject from "./mock/MockSourcesObject";
import Portfolio from "../src/components/Portfolio/Portfolio";
function App() {
  // const [isOnPortfolio, setIsOnPortfolio] = useState(false);
  // const [isOngoingSites, setIsOngoingSites] = useState(false);
  const Mock = MockSourcesObject;
  // const clickToPortfolioHandler = () => {
  //   console.log("Portfolio");
  //   setIsOnPortfolio(true);
  // };
  // const clickOnOngoingSitesHandler = () => {
  //   console.log("OngoingSites");
  //   setIsOngoingSites(true);
  // };
  return (
    <div className={classes.mainBody}>
      <Navbar />
      <Route path="/Portfolio">
        <Portfolio />
      </Route>
      <Route path='/home'>
      <Banner />
      <About />
      <Card title={Mock.parts.names[0]} parts={Mock.parts.experience} />
      <Card title={Mock.parts.names[1]} parts={Mock.parts.links} />
      <Footer />
      </Route>
      {/* {isOnPortfolio && <Portfolio />} */}

      {/* {isOngoingSites && <OngoingSites />} */}
    </div>
  );
}
export default App;
