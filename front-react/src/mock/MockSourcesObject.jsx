import profileImage from "../img/proImg.png";
import DesignedWebSite from "../img/website_icon.png";
import OngoingWebSite from "../img/processing_icon.png";
import GitHub from "../img/github_icon.png";
import LinkedIn from "../img/linkedin_icon.png";
import SnakeGame from "../img/SnakeGame.png";
import SuperMario from "../img/SuperMario.png";
import TicTacToe from "../img/tictactoe.png";

const MockSourcesObject = {
  about: {
    title: "About",
    content:
      "  Knowledgeable Front End Developer adept at creating successful website that meet customer needs. Almost proficient in HTML, CSS, JAVASCRIPT and REACT. Like to work with teams to produce impactful, leading-edge website that engage customers and deliver business result. Considering hard working, punctual and driven.To seek and maintain a full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem- solving.",
  },
  banner: {
    name: "I am Daniel Mahmoodi",
    content: `I'm Daniel, Junior FrontEnd web developer(React.js) with one year experience in this field.`,
    button: "My Portfolio",
    imgUrl: profileImage,
    ImgAlt: "profile-image",
  },
  parts: {
    names: ["Work Experience", "Links"],
    experience: [
      {
        id: "1",
        title: "Designed sites",
        imgUrl: DesignedWebSite,
        items: [
          {
            id: "1",
            title: "SnakeGame",
            content: "Classic Super Mario game made with JavaScript and Css",
            linkUrl: "https://github.com/daniel-mahmoodi/SnakeGame",
            imgUrl: SnakeGame,
            pobilshedDate: "Last updated 7 months ago",
          },
          {
            id: "2",
            title: "TicTacToe",
            content: "created TicTacToe game with Reactjs and Css",
            linkUrl: "https://github.com/daniel-mahmoodi/TicTacToe",
            imgUrl: TicTacToe,
            pobilshedDate: "Last updated 9 months ago",
          },
          {
            id: "3",
            title: "Super Mario",
            content: "Classic Super Mario game made with JavaScript and kaboom",
            linkUrl: "https://github.com/daniel-mahmoodi/mario-game",
            imgUrl: SuperMario,
            pobilshedDate: "Last updated 3 months ago",
          },
        ],
      },
      {
        id: "2",
        title: "Ongoing sites",
        imgUrl: OngoingWebSite,
        items: [
          {
            id: "1",
            title: "SnsssssssssakeGame",
            content: "Classic Super Mario game made with JavaScript and Css",
            linkUrl: "https://github.com/daniel-mahmoodi/SnakeGame",
            imgUrl: SnakeGame,
            pobilshedDate: "Last updated 7 months ago",
          },
          {
            id: "2",
            title: "TicsssssssssssssTacToe",
            content: "created TicTacToe game with Reactjs and Css",
            linkUrl: "https://github.com/daniel-mahmoodi/TicTacToe",
            imgUrl: TicTacToe,
            pobilshedDate: "Last updated 9 months ago",
          },
          {
            id: "3",
            title: "Supsssssssssssser Mario",
            content: "Classic Super Mario game made with JavaScript and kaboom",
            linkUrl: "https://github.com/daniel-mahmoodi/mario-game",
            imgUrl: SuperMario,
            pobilshedDate: "Last updated 3 months ago",
          },
        ],
      },
    ],
    links: [
      {
        id: "11",
        title: "GitHub",
        imgUrl: GitHub,
        linkUrl: "https://github.com/daniel-mahmoodi",
      },
      {
        id: "12",
        title: "LinkedIn",
        imgUrl: LinkedIn,
        linkUrl: "https://www.linkedin.com/in/danial-mahmoodi-29ba60204/",
      },
    ],
  },
  contacts: { title: "Contacts" },
};

export default MockSourcesObject;
