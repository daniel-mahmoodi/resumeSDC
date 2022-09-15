import profileImage from "../img/proImg.png";
import DesignedWebSite from "../img/website_icon.png";
import OngoingWebSite from "../img/processing_icon.png";
import GitHub from "../img/processing_icon.png";
import LinkedIn from "../img/processing_icon.png";

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
    names:['Work Experience',"Links"],
    experience: [
      { id: 1, title: "Designed sites", imgUrl: DesignedWebSite },
      { id: 2, title: "Ongoing sites", imgUrl: OngoingWebSite },
    ],
    links: [
      { id: 1, title: "GitHub", imgUrl: GitHub },
      { id: 2, title: "LinkedIn", imgUrl: LinkedIn },
    ],
  },
  contacts:{title:'Contacts'}
};

export default MockSourcesObject;
