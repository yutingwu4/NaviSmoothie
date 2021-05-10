import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SmoothieForm from "./components/SmoothieForm";
import ViewSmoothies from "./components/ViewSmoothies";
import NavBar from "./components/NavBar";
import MockData from "./components/assets/MockData";

/**
 * @terms
 * Link: serves similar purpose as an <a> tag.
 * Route: conditionally rendering of components depending on path.
 * Switch: required in order to only render one component at a time.
 */

function App() {
  //establish state for displaying all smoothie cards
  const [smoothies, setSmoothies] = useState(MockData);

  //to verify unique name
  const isUniqueName = (name) => {
    //iterate array of objects, verify name does not

    //array.some
    const isUnique = smoothies.some((smoothie) => smoothie.name !== name);

    return isUnique;
  };

  //to add a smoothie card
  const addCard = (newCard) => {
    if (isUniqueName(newCard.name)) {
      let temp = [...smoothies];
      temp.push(newCard);
      setSmoothies(temp);
    } else {
      alert("This name is already taken! Please enter a unique name.");
    }
  };

  //to delete a smoothie card
  const deleteCard = (card) => {
    let temp = [...smoothies];
    let indexToRemove = temp.indexOf(card);
    temp.splice(indexToRemove, 1);
    setSmoothies(temp);
  };

  //to edit a smoothie card; update state from global to local variable
  const saveCardEdit = (card) => {
    if (isUniqueName(card.name)) {
      let temp = [...smoothies];
      let indexToEdit = temp.indexOf(card);
      temp[indexToEdit].name = card.name;
      temp[indexToEdit].ingredients = card.ingredients;
      temp[indexToEdit].instructions = card.instructions;
      temp[indexToEdit].notes = card.notes;
      console.log("temp", temp);
      setSmoothies(temp);
    } else {
      alert("This name is already taken! Please enter a unique name.");
    }
  };

  return (
    <div className="parentContainer">
      <Router>
        <NavBar />

        <div className="switchContainer">
          <Switch>
            <Route exact path="/">
              <ViewSmoothies
                smoothies={smoothies}
                deleteCard={deleteCard}
                saveCardEdit={saveCardEdit}
              />
            </Route>

            <Route path="/SmoothieForm">
              <SmoothieForm addCard={addCard} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
