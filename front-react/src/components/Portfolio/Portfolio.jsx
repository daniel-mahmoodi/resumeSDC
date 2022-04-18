import React from "react";
import About from "../About/About";
import WorkEsperience from "../WorkEsperience/WorkExperience";
import classes from "./Portfolio.module.css";
import gmailContact from "../../img/mail_message_email_letter.png";
import callContact from "../../img/cellphone_device_mobile_icon.png";
import locationContact from "../../img/pointer_place_maker_map.png";
import linkedinContact from "../../img/linkedin_logo_logos_icon.png";
const Portfolio = () => {
  return (
    <div className={classes.main}>
      <div className={classes.leftSide}>
        <div className={classes.contact}>
          <h2 className={classes.skillsTitle}>CONTACT</h2>
          <a href="mailto:danialmahmoodi2@gmail.com">
            <img src={gmailContact} alt="" />
            <div>mahmoodidanial2@gmail.com</div>
          </a>
          <a href="tel:+989189755675">
            <img src={callContact} alt="" />
            <div>+989189755675</div>
          </a>
          <a href="">
            <img src={locationContact} alt="" />
            <div>kurdestan</div>
          </a>
          <a href="https://www.linkedin.com/in/danial-mahmoodi-29ba60204/">
            <img src={linkedinContact} alt="" />
            https://www.linkedin.com/in/danial-mahmoodi
          </a>
        </div>
        <div className={classes.skills}>
          <h2 className={classes.skillsTitle}>SKILLS</h2>
          <div className={classes.progressBarTitle}>Javascript</div>
          <div className={classes.progressBar}>
            <div
              className={`${classes.progressBarChild} ${classes.Javascript}`}
            ></div>
          </div>
          <div className={classes.progressBarTitle}>Typescript</div>
          <div className={classes.progressBar}>
            <div
              className={`${classes.progressBarChild} ${classes.Typescript}`}
            ></div>
          </div>
          <div className={classes.progressBarTitle}>Reactjs</div>
          <div className={classes.progressBar}>
            <div
              className={`${classes.progressBarChild} ${classes.Reactjs}`}
            ></div>
          </div>
          <div className={classes.progressBarTitle}>Css&HTML</div>
          <div className={classes.progressBar}>
            <div className={`${classes.progressBarChild} ${classes.Css}`}></div>
          </div>
          <div className={classes.progressBarTitle}>React-Redux</div>
          <div className={classes.progressBar}>
            <div
              className={`${classes.progressBarChild} ${classes.Redux}`}
            ></div>
          </div>
          <h2 className={classes.skillsTitle}>LANGUAGE</h2>
          <div className={classes.progressBarTitle}>English</div>
          <div className={classes.progressBar}>
            <div
              className={`${classes.progressBarChild} ${classes.English}`}
            ></div>
          </div>
          <div className={classes.progressBarTitle}>Persian</div>
          <div className={classes.progressBar}>
            <div
              className={`${classes.progressBarChild} ${classes.Persian}`}
            ></div>
          </div>
        </div>
      </div>
      <div className={classes.rightSide}>
        <About />
        <WorkEsperience />
      </div>
    </div>
  );
};

export default Portfolio;
