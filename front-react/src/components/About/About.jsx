import React from "react";
import classes from "./About.module.css";
const About = () => {
  const aboutText = (
    <p className={classes.aboutText}>
      Knowledgeable Front End Developer adept at creating successful website
      that meet customer needs. Almost proficient in HTML, CSS, JAVASCRIPT and
      REACT. Like to work with teams to produce impactful, leading-edge website
      that engage customers and deliver business result. Considering hard
      working, punctual and driven.To seek and maintain a full-time position
      that offers professional challenges utilizing interpersonal skills,
      excellent time management and problem- solving.
    </p>
  );

  return (
    <div className={classes.aboutBody}>
      <h2 className={classes.aboutHeader}>About</h2>
      {aboutText}
    </div>
  );
};

export default About;
