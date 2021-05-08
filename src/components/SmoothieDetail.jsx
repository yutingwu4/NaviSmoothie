/**
 * @name SmoothieDetail
 * @desc Component to show more details when user clicks each smoothie card.
 */

import React from "react";

function SmoothieDetail() {
  return (
    <div className="cardDetail">
      <p className="card-title">
        <h5>Smoothie Name</h5>
        <button>Edit</button>
      </p>
      <p className="card-text">
        <span className="detailLabel">Ingredients x</span>
        <button>Update Card</button>
      </p>
      <button>Delete Card</button>
    </div>
  );
}

export default SmoothieDetail;
