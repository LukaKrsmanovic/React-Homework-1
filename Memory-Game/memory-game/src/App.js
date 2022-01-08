import React from "react";
import "./App.css";
import { Card } from "./Card";

const card_back_img = "./card-images/card-back.jpg";

const allImages = [
  "./card-images/card-1.jpg",
  "./card-images/card-2.jpg",
  "./card-images/card-3.jpg",
  "./card-images/card-4.jpg",
  "./card-images/card-5.jpg",
  "./card-images/card-6.jpg",
];

let shuffledImagesIndexes = [];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      triesLeft: 5,
      points: 0,
      openCards: 0,
      previousImgIndex: -1,
      previousImgElement: <div></div>,
      matchedCards: [],
    };
  }

  revealCard = (e) => {
    let triesLeft = this.state.triesLeft;
    let matchedCards = this.state.matchedCards;

    let clickedDiv = e.currentTarget;

    if (triesLeft !== 0 && !matchedCards.includes(clickedDiv.id)) {
      let points = this.state.points;
      let openCards = this.state.openCards + 1;
      let previousImgElement = this.state.previousImgElement;

      let clickedDivImg = clickedDiv.firstChild.firstChild;

      let currentImgIndex = shuffledImagesIndexes[clickedDiv.id];

      clickedDivImg.src = allImages[currentImgIndex];

      if (openCards === 2) {
        if (this.state.previousImgIndex === currentImgIndex) {
          points += triesLeft * 2;

          clickedDiv.className = "card";
          previousImgElement.parentNode.parentNode.className = "card";
          matchedCards.push(clickedDiv.id);
          matchedCards.push(previousImgElement.parentNode.parentNode.id);
        } else {
          triesLeft--;

          let tempPreviousEl = previousImgElement;
          setTimeout(function () {
            clickedDivImg.src = card_back_img;
            tempPreviousEl.src = card_back_img;
          }, 1000);
        }

        openCards = 0;
      }

      setTimeout(function () {
        if (triesLeft === 0 || matchedCards.length === 12) {
          if (!alert("The End!\nYou scored: " + points)) {
            window.location.reload();
          }
        }
      }, 1100);

      previousImgElement = clickedDivImg;
      this.setState({
        triesLeft,
        points,
        openCards,
        previousImgIndex: currentImgIndex,
        previousImgElement,
        matchedCards,
      });
    }
  };

  createField = () => {
    while (true) {
      let number = this.intRandUpTo(6);

      if (shuffledImagesIndexes.filter((ind) => ind === number).length < 2) {
        shuffledImagesIndexes.push(number);
      }

      if (shuffledImagesIndexes.length === 12) {
        break;
      }
    }

    let temp = 0;
    return shuffledImagesIndexes.map((ind) => {
      return (
        <Card
          cardId={temp}
          key={temp++}
          onClickFun={this.revealCard.bind(this)}
        ></Card>
      );
    });
  };

  intRandUpTo(x) {
    return Math.floor(Math.random() * x);
  }

  render() {
    return (
      <div className="App">
        <div className="background-image">
          <div className="background-color"></div>
          <div className="background-color-gradient"></div>
        </div>

        <div className="main-container">
          <div className="game-header">
            <h2>Points: {this.state.points}</h2>
            <h2>Tries left: {this.state.triesLeft}</h2>
          </div>

          <div className="ui four cards">{this.createField()}</div>
        </div>
      </div>
    );
  }
}

export default App;
