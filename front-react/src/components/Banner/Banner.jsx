import React from "react";

import classes from "./Banner.module.css";

import profileImage from "../../img/proImg.png";

const Banner = (props) => {
  return (
    <div className={classes.bgBanner}>
      <div>
        <h1 className="display-4">I am Daniel Mahmoodi</h1>
        <p className="lead">
          i'm Daniel, Junior FrontEnd web developer(React.js) with one year
          experience in this field.{" "}
        </p>
        <button onClick={props.clickToPortfolio} className="btn btn-danger bg-dark rounded">My Portfolio</button>
      </div>
      <div className={classes.bannerRightItem}>
        <a href="">
          <img src={profileImage} alt="profile-image" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
