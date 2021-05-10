/**
 * @name ViewSmoothies
 * @desc Highest component in hierarchy that displays both SmoothieDisplay and SmoothieCard.
 */

import React from "react";

import SmoothieCard from "./SmoothieCard";
import Colors from "./assets/Colors";

console.log("Colors", Colors);

function ViewSmoothies({
  smoothies,
  deleteCard,
  setIngredients,
  setInstructions,
  setNotes,
  saveCardEdit,
}) {
  const renderCards = smoothies.map((smoothie, i) => (
    <SmoothieCard
      className="view-cards"
      key={i}
      name={smoothie.name}
      ingredients={smoothie.ingredients}
      instructions={smoothie.instructions}
      notes={smoothie.notes}
      id={i}
      deleteCard={deleteCard}
      saveCardEdit={saveCardEdit}
      smoothies={smoothies}
      setIngredients={setIngredients}
      setInstructions={setInstructions}
      setNotes={setNotes}
      // style={{ backgroundColor: Colors[Math.floor(Math.random() * 142)] }}
    />
  ));

  return (
    <div className="view-smoothies">
      <h1 className="slogan mt-5">Welcome to the New You</h1>
      <form className="search-form">
        <input
          className="search-bar mt-5 ml-4"
          type="text"
          placeholder="Where's mah smoothie?"
        />
        <button type="button" className="btn btn-primary ml-4 mb-1">
          Search
        </button>
      </form>
      <div className="view-cards">{renderCards}</div>
    </div>
  );
}

export default ViewSmoothies;
