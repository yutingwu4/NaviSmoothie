/**
 * @name SmoothieDetail
 * @desc Component to show more details when user clicks each smoothie card.
 */

import React from "react";

function SmoothieDetail({ ingredients, instructions, notes }) {
  return (
    <div className="smoothie-detail">
      <h5 className="smoothie-detail-ing">Ingredients:</h5>
      <p>{ingredients}</p>

      <h5 className="smoothie-detail-inst">Instructions:</h5>
      <p>{instructions}</p>

      <h5 className="smoothie-detail-notes">Notes:</h5>
      <p>{notes}</p>
    </div>
  );
}

export default SmoothieDetail;
