/**
 * @name SmoothieDetail
 * @desc Component to show more details when user clicks each smoothie card.
 */

import React from "react";

function SmoothieDetail({ ingredients, instructions, notes, closePopUp, id }) {
  //render close button inside return below, needs onClick prop -> invokes closePopUp
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

// function SmoothieDetail({ name, ingredients }) {
//   return (
//     <div className="cardDetail">
//       <p className="card-title">
//         <h5>{name}</h5>
//         <button>Edit</button>
//       </p>
//       <p className="card-text">
//         <span className="detailLabel">{ingredients}</span>
//         <button>Update Card</button>
//       </p>
//       <button>Delete Card</button>
//     </div>
//   );
// }

export default SmoothieDetail;
