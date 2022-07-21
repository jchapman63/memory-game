import React, { useState, useEffect } from "react";
import "./component-styles/board.css";

import adelie from "./images/adelie-penguin.jpeg";
import chinstrap from "./images/chinstrap-penguin.webp";
import emperor from "./images/emperor-penguin.webp";
import gentoo from "./images/gentoo-penguin.jpeg";
import king from "./images/king-penguin.jpeg";
import macaroni from "./images/macaroni-penguin.jpeg";
import rockHopper from "./images/rockhopper-penguin.jpg";
import royal from "./images/royal-penguin.webp";
import kairuku from "./images/kairuku-penguin.webp";

function Board(props) {
  const [images, setImages] = useState([
    // "./images/adelie-penguin.jpeg",
    (adelie = {
      image: adelie,
      name: "Adelie",
    }),
    (chinstrap = {
      image: chinstrap,
      name: "Chinstrap",
    }),
    (emperor = {
      image: emperor,
      name: "Emperor",
    }),
    (gentoo = {
      image: gentoo,
      name: "Gentoo",
    }),
    (king = {
      image: king,
      name: "King",
    }),
    (macaroni = {
      image: macaroni,
      name: "Macaroni",
    }),
    (rockHopper = {
      image: rockHopper,
      name: "Rock Hopper",
    }),
    (royal = {
      image: royal,
      name: "Royal",
    }),
    (kairuku = {
      image: kairuku,
      name: "Kairuku",
    }),
  ]);

  const clickedImages = [];

  const shuffleImages = () => {
    let currentIndex = images.length;
    while (currentIndex != 0) {
      var randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [images[currentIndex], images[randomIndex]] = [
        images[randomIndex],
        images[currentIndex],
      ];
    }
    return images;
  };

  useEffect(() => {
    setImages(shuffleImages());
  });

  const addPeng = (name) => {
    props.addPenguin(name);
  };

  return (
    <div className="game-board">
      {images.map((penguin) => {
        return (
          <div key={penguin.name}>
            {/* <img
              src={penguin.image.image}
              alt={penguin.name}
              onClick={props.increaseCount}
            /> */}
            <div
              className="card"
              id={penguin.name}
              onClick={(e) => {
                e.preventDefault();
                addPeng(penguin.name);
              }}
            >
              <img src={penguin.image.image} alt="" />
              <p>{penguin.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Board;
