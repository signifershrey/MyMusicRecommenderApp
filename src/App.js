import React, { useState } from "react";
import "./styles.css";

const bands = {
  RockBands: [
    { name: "The Local Train", bestSong: "Aaoge Tum Kabhi", rating: "5/5" },
    { name: "Indian Ocean", bestSong: "Bandheh", rating: "3/5" },
    {
      name: "Naalayak",
      bestSong: "Bawra",
      rating: " 4/5"
    }
  ],
  Artist: [
    { name: "Prateek Kuhad", bestSong: "Kasoor", rating: "4/5" },
    { name: "Ritviz", bestSong: "Liggi", rating: "4/5" },
    { name: "Kailash Kher", bestSong: "Allah ke Bande", rating: " 3/5" }
  ],
  BigRoomEDM: [
    { name: "Reggio", bestSong: "Rave Anthem", rating: "5/5" },
    { name: "Maddix", bestSong: "Bello Ciao", rating: "4/5" },
    { name: "Mr.Black", bestSong: "Boomshakalalak", rating: " 4/5" }
  ]
};

let bandGeneres = Object.keys(bands);

export default function App() {
  const [bandState, setBandState] = useState(bands.RockBands);

  function clickEventListner(bandGeneres) {
    // console.log(bandGeneres);
    let userInput = bands[bandGeneres];
    //console.log(userInput.name, userInput.bestSong, userInput.rating);
    setBandState(userInput);
  }

  return (
    <div className="App">
      <h1 className="heading">MY MUSIC LIST 🎵</h1>
      <div className="btn">
        {bandGeneres.map((bandGeneres) => {
          return (
            <button onClick={() => clickEventListner(bandGeneres)}>
              {bandGeneres}
            </button>
          );
        })}
      </div>
      <div className="band-list-total">
        {bandState.map((bandGeneres) => {
          return (
            <div className="band-list">
              <p className="band-name name">Artist: {bandGeneres.name}</p>
              <p className="band-name bestsong">
                Best Songs: {bandGeneres.bestSong}
              </p>
              <p className="band-name rating">Rating: {bandGeneres.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
