/**
 * @name ViewSmoothies
 * @desc Highest component in hierarchy that displays both SmoothieDisplay and SmoothieCard.
 */

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SmoothieDisplay from "./SmoothieDisplay";
import SmoothieCard from "./SmoothieCard";
import Colors from "./assets/Colors";

// Dummy data:
const cardHolder = [
  {
    name: "May Unicorn",
    ingredients:
      "Nonfat yogurt - 2 cups, Almond milk - 1 cup, Mixed berries - 1 cup, Sour gummibears, Sprinkles - 1 TB",
    instructions: "Add cashews for texture, blend with ice.",
    notes: "Calories: 200g, Sugar: 13g, Protein: 11g",
  },
  {
    name: "Kevin",
    ingredients:
      "Nonfat greek yogurt - 2 cups, Almond milk - 2 cups, SUPER CREATINE",
    instructions: "Eat with hot cheetos, blend with ice.",
    notes: "Calories: 0, Sugar: 000000000",
  },
  {
    name: "NoDramaLlama",
    ingredients:
      "Nonfat greek yogurt - 1/2 cup, Unsweetened almond milk - 1 cups, Frozen sliced bananas - 2 cups, Flax seeds - 1 TB, ground coffee beans - 1/4 cup, boba balls",
    instructions: "Blend on high until smooth",
    notes: "Calories: 300g, Sugar: 21g, Fiber: 4g, Protein 20g",
  },
];

console.log("Colors", Colors);

function ViewSmoothies() {
  //establish state for displaying all smoothie cards
  const [cards, setCards] = useState([]);

  // it updates the "cards" state to be the dummy data.
  // useEffect! :)

  useEffect(() => {
    setCards(cardHolder);
  }, []);

  // Set empty array here:
  const renderCards = [];
  // Loop thru cards array, then push to a *NEW* empty array to hold the cards, then
  // render this new array.
  // colors[ <random idx <= 140  ]
  cards.forEach((card, i) => {
    renderCards.push(
      <SmoothieCard
        key={i}
        name={card.name}
        ingredients={card.ingredients}
        instructions={card.instructions}
        notes={card.notes}
        id={i}
        // style={{ backgroundColor: Colors[Math.floor(Math.random() * 142)] }}
      />
    );
  });

  return <div className="view-smoothies">{renderCards}</div>;
}

export default ViewSmoothies;
