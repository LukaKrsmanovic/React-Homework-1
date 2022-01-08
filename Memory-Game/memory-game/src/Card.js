import React from "react";

export function Card(props) {
  return (
    <div
      className="card not-matched"
      id={props.cardId}
      onClick={props.onClickFun}
    >
      <div className="image">
        <img src="./card-images/card-back.jpg" />
      </div>
    </div>
  );
}
