import React from "react";
import classes from "./Banner.module.css";
import MockSourcesObject from "../../mock/MockSourcesObject";
import ReactJsIcon from "../../img/icons8-react-40.png";
import NextJsIcon from "../../img/nextjs.jpg";
import SassIcon from "../../img/sass.png";
import GitHubIcon from "../../img/github_icon.png";
import TailwindIcon from "../../img/tailwind.png";
import BootstrapIcon from "../../img/bootstrap.png";
import RouterIcon from "../../img/router.png";
import PWAIcon from "../../img/PWA.png";
import ReduxIcon from "../../img/redux.png";
import FormikIcon from "../../img/formik.png";
import TypescriptIcon from "../../img/typescript.png";
import MaterialUIIcon from "../../img/materialUI.png";
import AxiosIcon from "../../img/axios.png";
const Banner = (props) => {
  const Mock = MockSourcesObject.banner;
  return (
    <div className={classes.bgBanner}>
      <div>
        <img className={classes.mask} src={Mock.imgUrl} alt={Mock.ImgAlt} />
      </div>
      <div className={classes.content}>
        <h1>{Mock.name}</h1>
        <p>{Mock.content}</p>
        <button className={classes.btn} onClick={props.clickToPortfolio}>
          {Mock.button}
        </button>
        <div className={classes.toolsIcone}>
          <img src={ReactJsIcon} alt="ReactJs" />
          <img src={NextJsIcon} alt="NextJs" />
          <img src={ReduxIcon} alt="redux" />
          <img src={PWAIcon} alt="PWA" />
          <img src={RouterIcon} alt="router" />
          <img src={TypescriptIcon} alt="typescript" />
          <img src={SassIcon} alt="Sass" />
          <img src={TailwindIcon} alt="tailwind" />
          <img src={BootstrapIcon} alt="bootstrap" />
          <img src={MaterialUIIcon} alt="materialUI" />
          <img src={GitHubIcon} alt="github" />
          <img src={FormikIcon} alt="formik" />
          <img src={AxiosIcon} alt="axios" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
