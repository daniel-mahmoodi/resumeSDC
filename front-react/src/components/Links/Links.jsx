import React from "react";

import classes from "../Layout/Parts/Card.module.css";
import CardTitle from "../Layout/Title/CardTitle";

const Links = (props) => {
  return (
    <div>
      <CardTitle title={props.title}>{props.title}</CardTitle>
      <div className={classes.parts}>
        {props.parts.map(({ id, title, imgUrl, linkUrl }) => (
          <a href={linkUrl} key={id} className={classes.part}>
            <div>
              <img src={imgUrl} alt={imgUrl} />
              <h2>{title}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Links;
