import React from "react";

import classes from "./Card.module.css";
import CardTitle from "../Title/CardTitle";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      <CardTitle title={props.title}>{props.title}</CardTitle>
      <div className={classes.parts}>
        {props.parts.map(({ id, title, imgUrl }) => (
          <Link to={`/home/${id}`} key={id} className={classes.part}>
            <div>
              <img src={imgUrl} alt={imgUrl} />
              <h2>{title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
