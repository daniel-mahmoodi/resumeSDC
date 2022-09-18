import React from "react";
import classes from "./About.module.css";
import MockSourcesObject from "../../mock/MockSourcesObject";
import CardTitle from "../Layout/Title/CardTitle";
const About = () => {
  return (
    <div>
      <CardTitle title={MockSourcesObject.about.title}>
        {MockSourcesObject.about.title}
      </CardTitle>
      <p className={classes.aboutText}>{MockSourcesObject.about.content}</p>
    </div>
  );
};

export default About;
