/**
 * @name SmoothieForm
 * @user Component that allows user to create a new smoothie.
 */

import React, { useState } from "react";

function SmoothieForm(props) {
  //establish state for input fields
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [notes, setNotes] = useState("");

  //onChange event handler to update state when key is pressed in input field
  //by default HTML/JS manually re-renders entire page whenever form is submitted, 
  //React only re-renders components that changed

  const submitForm = (event) => {
    event.preventDefault();

    const cardObj = {
      name,
      ingredients,
      instructions,
      notes,
      id: props.newId,
    };

    props.addCard(cardObj);

    //clear input fields
    setName("");
    setIngredients([]);
    setInstructions("");
    setNotes("");
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-6">
        <form
          onSubmit={submitForm}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label>
            Name of Your Creation:
            <input
              className="form-control"
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              name="creation-name"
              value={name}
              required
            />
          </label>
          <label>
            Ingredients:
            <textarea
              className="form-control"
              style={{ width: "100%" }}
              onChange={(e) => {
                setIngredients(e.target.value);
              }}
              type="text"
              name="ingredients"
              value={ingredients}
              required
            />
          </label>
          <label>
            Instructions:
            <textarea
              className="form-control"
              style={{ width: "100%" }}
              onChange={(e) => {
                setInstructions(e.target.value);
              }}
              type="text"
              name="instructions"
              value={instructions}
              required
            />
          </label>
          <label>
            Notes:
            <textarea
              className="form-control"
              style={{ width: "100%" }}
              onChange={(e) => {
                setNotes(e.target.value);
              }}
              type="text"
              name="notes"
              value={notes}
              required
            />
          </label>

          <button className="btn btn-primary" type="submit">
            Add Smoothie
          </button>
          <button className="btn btn-secondary mt-2" type="reset">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default SmoothieForm;
