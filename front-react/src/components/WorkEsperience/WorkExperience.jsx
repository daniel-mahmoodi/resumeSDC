import React from "react";

// import classes from "./Skills.module.css";
import MockSourcesObject from "../../mock/MockSourcesObject";
import DesignedSites from "./OngoingSites/DesignedSites";
// import CardItem from "./OngoingSites/CardItem";
// import OngoingSites from "./OngoingSites/OngoingSites";
import { useParams } from "react-router-dom";

// import website from "../../img/website_icon.png";
// import processing from "../../img/processing_icon.png";

const WorkExperience = () => {
  const params = useParams();
  const Mock = MockSourcesObject.parts.experience;
  const item = Mock.find((item) => item.id === params.cardId);
 
  if (!item) {
    return <p style={{ color: "white" }}>no items found</p>;
  }

  return (
    <div>
      <DesignedSites Mock={item.items} />
    </div>
  );
};

export default WorkExperience;
