import React from "react";

import classes from "./Card.module.css";

// import website from "../../../img/website_icon.png";
// import processing from "../../../img/processing_icon.png";
// import MockSourcesObject from "../../../mock/MockSourcesObject";
import CardTitle from "../Title/CardTitle";
// import CardLayout from "../CardLayout/CardLayout";

const Card = (props) => {
  console.log("test useEffect");
  // const Mock = props.Mock.parts;
  return (
    <div>
      <CardTitle title={props.title}>{props.title}</CardTitle>
      <div className={classes.parts}>
        {props.parts.map(({ id, title, imgUrl }) => (
          <div className={classes.part} key={id}>
            <img src={imgUrl} alt={imgUrl} />
            <h2>{title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
