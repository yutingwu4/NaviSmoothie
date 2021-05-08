/**
 * @name SmoothieCard
 * @desc Displays individual cards in SmoothieDisplay component.
 */

import React from "react";

function SmoothieCard() {
  return (
    <div className="smoothieCard">
      <div className="card-body">
        <h5 className="card-title">
          <span className="detailLabel">Smoothie Name</span>
        </h5>
        <p className="card-text">
          <span className="detailLabel">Ingredients</span>
        </p>
        <img src={} alt="smoothie-pic"></img>
      </div>
    </div>
  );
}

export default SmoothieCard;
