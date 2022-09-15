import React from "react";
import Contact from "../Contact/Contact";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <hr className={classes.hrStyle} />
     <Contact/>
    </div>
  );
};
export default Footer;
