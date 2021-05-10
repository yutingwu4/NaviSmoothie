/**
 * @name SmoothieForm
 * @user Component that allows user to create a new smoothie.
 */

import React, { useState, useHistory } from "react";

function SmoothieForm() {
  const history = useHistory();

  //establish state for input fields
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [notes, setNotes] = useState("");

  //onChange event handler to update state when key is pressed in input field
  // const addText = (e) => {};

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-6">
        <form
          // onSubmit={}
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
          <button className="btn btn-secondary" type="submit">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default SmoothieForm;

//---------//

// import React from 'react'

// const SmoothieForm = () => {

//   const textAdded = (e) => {
//     setNotes(e.target.value);
//   }

//   const clickButton = (e) => {
//     console.log("Button clicked");
//   }

//   const submitForm = (e) => {
//     e.preventDefault(); // Don't reload page on form submission

//   }

// return (
//   <div>
//     <ul>
//     {ingredients.map(ingredient => {
//       <li>{{ingredient.name}}</li>
//     })}
//     </ul>
//   </div>

//     <div>
//       <form onSubmit={submitForm}>
//         <input type="text" value={{ingredients}} onChange={textAdded} />
//         <button onClick={clickButton}>Add new ingredient</button>
//       </form>
//     </div>
//   )
// }
