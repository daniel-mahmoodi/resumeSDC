import React from "react";
// Css
import classes from "./Contact.module.css";
// ImgUrls
import twitter from "../../img/twitter_icon.png";
import whatsapp from "../../img/whatsapp_icon.png";
import cellPhone from "../../img/telephone_icon.png";
import telegram from "../../img/telegram_icon.png";
import gmail from "../../img/gmail_icon.png";
// Mock server
import MockSourcesObject from "../../mock/MockSourcesObject";
// titleLayout
import CardTitle from "../Layout/Title/CardTitle";

const Contact = () => {
  return (
    <div className={classes.contactBody}>
      <CardTitle title={MockSourcesObject.contacts.title}>
        {MockSourcesObject.contacts.title}
      </CardTitle>
      <div className={classes.socialNetworkIcones}>
        <button>
          <a href="https://twitter.com/daniel_webdvlpr">
            <img src={twitter} alt="" />
          </a>
        </button>
        <button>
          <a href="tel:+989189755675">
            <img src={cellPhone} alt="cellPhone" />
          </a>
        </button>
        <button>
          <img src={telegram} alt="" />
        </button>
        <button>
          <a href="https://api.whatsapp.com/send?phone=+989332364955">
            <img src={whatsapp} alt="" />
          </a>
        </button>
        <button>
          <a href="mailto:mahmoodidanial2@gmail.com">
            <img src={gmail} alt="" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
