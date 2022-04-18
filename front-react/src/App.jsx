import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Banner from "./components/Banner/Banner";
import Services from "./components/Links/Links";
import About from "./components/About/About";
import WorkEsperience from "./components/WorkEsperience/WorkExperience";
import OngoingSites from "./components/WorkEsperience/OngoingSites/OngoingSites";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isOnPortfolio, setIsOnPortfolio] = useState(false);
  const [isOngoingSites, setIsOngoingSites] = useState(false);
  const clickToPortfolioHandler = () => {
    console.log("Portfolio");
    setIsOnPortfolio(true);
  };
  const clickOnOngoingSitesHandler =()=>{
    console.log('OngoingSites');
    setIsOngoingSites(true)
  }
  return (
    <div>
      <Navbar />
      {!isOnPortfolio && !isOngoingSites && (
        <>
          <Banner clickToPortfolio={clickToPortfolioHandler} />
          <Contact />
          <Services />
          <About />
          <WorkEsperience clickOnOngoingSites={clickOnOngoingSitesHandler} />
          <Footer />
        </>
      )}
      {isOnPortfolio && <Portfolio />}

      {isOngoingSites && <OngoingSites />}
    </div>
  );
}

export default App;
