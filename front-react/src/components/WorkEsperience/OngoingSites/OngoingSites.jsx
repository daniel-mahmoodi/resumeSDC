import React from "react";
import classes from "./OngoingSites.module.css";
import SuperMario from "../../../img/SuperMario.png";
import SnakeGame from "../../../img/SnakeGame.png";
import TicTacToe from "../../../img/tictactoe.png";
const OngoingSites = () => {
  return (
    <div className={classes.main}>
      <div className="card-deck">
        <div className="card">
          <img className="card-img-top" src={SnakeGame} alt="Card image cap" />
          <div className={`${[`card-body`]} ${classes.cardBody}`} >
            <h5 className="card-title">SnakeGame</h5>
            <p className="card-text">
            Classic Super Mario game made with JavaScript and Css
            </p>
            <a
              href="https://github.com/daniel-mahmoodi/SnakeGame"
              className="btn btn-primary"
            >
              Go to SnakeGame
            </a>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 7 months ago</small>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={TicTacToe} alt="Card image cap" />
          <div className={`${[`card-body`]} ${classes.cardBody}`} >
            <h5 className="card-title">TicTacToe</h5>
            <p className="card-text">
            created TicTacToe game with Reactjs and Css

            </p>
            <a
              href="https://github.com/daniel-mahmoodi/TicTacToe"
              className="btn btn-primary"
            >
              Go to TicTacToe
            </a>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 months ago</small>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top " src={SuperMario} alt="" />
          <div className={`${[`card-body`]} ${classes.cardBody}`} >
            <h5 className="card-title">Super Mario</h5>
            <p className="card-text">
              Classic Super Mario game made with JavaScript and kaboom
            </p>
            <a
              href="https://github.com/daniel-mahmoodi/mario-game"
              className="btn btn-primary"
            >
              Go to mario-game
            </a>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 months ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingSites;
