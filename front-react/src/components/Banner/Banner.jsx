import React from "react";
import classes from "./Banner.module.css";
import MockSourcesObject from "../../mock/MockSourcesObject";

const Banner = (props) => {
  const Mock = MockSourcesObject.banner;
  return (
    <div className={classes.bgBanner}>
      <div >
        <img className={classes.mask} src={Mock.imgUrl} alt={Mock.ImgAlt} />
      </div>
      <div>
        <h1>{Mock.name}</h1>
        <p>{Mock.content}</p>
        <button className={classes.btn} onClick={props.clickToPortfolio}>{Mock.button}</button>
      </div>
    </div>
  );
};

export default Banner;
