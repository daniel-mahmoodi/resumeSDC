import React from "react";
// import { useParams } from "react-router-dom";
import classes from "./OngoingSites.module.css";
import CardItem from "./CardItem";
// import SuperMario from "../../../img/SuperMario.png";
// import SnakeGame from "../../../img/SnakeGame.png";
// import TicTacToe from "../../../img/tictactoe.png";
const DesignedSites = (props) => {
  // const params = useParams();
  // const item = Mock.find((item) => item.id === params.cardId);
  // // console.log("item", item);
  // // console.log("Mock", Mock);
  // // console.log("params.cardId", params.cardId);
  // // console.log("item.id", item.id);
  // if (!item) {
  //   return <p style={{ color: "white" }}>no items found</p>;
  // }
  console.log("props ongoing Mock", props.Mock);
  return (
    // <Route path="/home/1">
    <div className={classes.main}>
      <div className="card-deck">
        {props.Mock.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
    // </Route>
  );
};

export default DesignedSites;
