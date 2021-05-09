/**
 * @name SmoothieForm
 * @user Component that allows user to create a new smoothie.
 */

import React, { useState, useHistory } from "react";

function SmoothieForm() {
  const history = useHistory();

  //establish state for input fields
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [notes, setNotes] = useState("");

  //onChange event handler to update state when key is pressed in input field
  // const addText = (e) => {};

  return <div></div>;
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
