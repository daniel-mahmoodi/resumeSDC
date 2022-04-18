import React from "react";

import classes from "./Links.module.css";

import github from "../../img/github_icon.png";
import linkedin from "../../img/linkedin_icon.png";

const Links = () => {
  return (
    <div className={classes.LinksBody}>
      <h2 className={classes.LinksHeader}>Links</h2>
      <div className={classes.LinksPart}>
        <div>
          <a href="https://github.com/daniel-mahmoodi">

          <img className={classes.socialNetworkIconesImg} src={github} alt="" />
          </a>
          <h2>GitHub</h2>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/danial-mahmoodi-29ba60204/">
            <img
              className={classes.socialNetworkIconesImg}
              src={linkedin}
              alt=""
            />
          </a>
          <h2>LinkedIn</h2>
        </div>
      </div>
    </div>
  );
};

export default Links;
