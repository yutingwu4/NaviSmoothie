/**
 * @name SmoothieCard
 * @desc Displays individual cards in SmoothieDisplay component.
 */

import React, { useState } from "react";
import SmoothieDetail from "./SmoothieDetail";
// import { Switch, Route } from "react-router-dom";

function SmoothieCard({ name, ingredients, instructions, notes, id }) {
  const [showPopup, setShowPopup] = useState(false);

  const popupHandler = () => {
    if (!showPopup) setShowPopup(true);
  };

  const closePopUpHandler = () => {
    if (showPopup) setShowPopup(false);
  };

  // Pen turns into a save button
  // Pen -> enableEdit
  // Save -> disableEdit
  const [enableEdit, setEnableEdit] = useState(false);

  const enableEditHandler = () => {
    if (!enableEdit) setEnableEdit(true);
  }
  
  const disableEditHandler = () => {
    if (enableEdit) setEnableEdit(false);
  }

  //edit name handler
  // When I type into the input field of the SmoothDetail,
  // I can update Name, or Ingredients, etc. when I click save.
  //editName, setEditName = useState({name})

  //edit ingredients handler

  return (
    // <Switch>
    // <Route exact path="/">
    <div>
      <button onClick={popupHandler} className="smoothie-card">
        <h3 className="card-title">
          <span className="smoothie-name">{name}</span>
        </h3>
        {showPopup ? (
          <SmoothieDetail
            name={name}
            ingredients={ingredients}
            instructions={instructions}
            notes={notes}
            closePopUp={closePopUpHandler}
            id={id}
          />
        ) : null}
        {/* <img className="smoothie_img" src={image} alt="smoothie-pic"></img> */}
      </button>
    </div>

    // </Route>
    // {/* </Switch> */}
  );
}

export default SmoothieCard;
