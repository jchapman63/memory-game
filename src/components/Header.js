import React from "react";
import "./component-styles/header.css";

function Header(props) {
  return (
    <div className="header">
      <h1 className="game-title">Penguin Memory Game!</h1>
      <h3 className="game-description">Don't click the same card twice</h3>
      <div className="score-board">
        <p className="score">Score: {props.count}</p>
        <p className="best">Best Score: {props.bestCount}</p>
      </div>
    </div>
  );
}

export default Header;
