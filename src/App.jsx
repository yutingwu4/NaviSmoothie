import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SmoothieForm from "./components/SmoothieForm";
import ViewSmoothies from "./components/ViewSmoothies";
import NavBar from "./components/NavBar";
import MockData from "./MockData";
import useLocalStorage from "./UseLocalStorage";
const { v4: uuidv4 } = require("uuid");

/**
 * @terms
 * Link: serves similar purpose as an <a> tag.
 * Route: conditionally rendering of components depending on path.
 * Switch: required in order to only render one component at a time.
 */

function App() {
  //establish state for displaying all smoothie cards
  const [smoothies, setSmoothies] = useLocalStorage("smoothies", MockData);
  const [newId, setNewId] = useState(3);

  //to verify unique name
  const isUniqueName = (name) => {
    //iterate array of objects, verify name is unique
    const isUnique = !smoothies.some((smoothie) => smoothie.name === name);
    return isUnique;
  };

  //to add a smoothie card
  const addCard = (newCard) => {
    if (!isUniqueName(newCard.name)) {
      alert("This name is already taken! Please enter a unique name.");
    } else {
      let temp = [...smoothies];
      const newId = uuidv4();
      temp.push(newCard);
      setSmoothies(temp);
      setNewId(newId); //every time we add card, generate new id
      alert("Card successfully added! Click on View All to see new card.");
    }
  };

  //to delete a smoothie card
  const deleteCard = (card) => {
    let temp = [...smoothies];
    let indexToRemove = temp.indexOf(card);
    temp.splice(indexToRemove, 1);
    setSmoothies(temp);
  };

  //to edit name, must check unique name against itself
  //is id same as id that we passed in?
  const isEditNameUnique = (name, id) => {
    //iterate array of objects, verify name is diff from current input name
    //and other names from objects in array

    const sameNameAndId = smoothies.some((card) => {
      return card.name === name && card.id === id;
    });

    return sameNameAndId;
  };

  //to edit a smoothie card; update state from global to local variable
  const saveCardEdit = (card) => {
    if (isEditNameUnique(card.name, card.id) || isUniqueName(card.name)) {
      let temp = [...smoothies];
      //iterate thru temp to check if card.id matches temp[i].id, then indexToEdit = i
      let indexToEdit;
      for (let i = 0; i < temp.length; i++) {
        if (card.id === temp[i].id) {
          indexToEdit = i;
        }
      }
      console.log("indexToEdit", indexToEdit);
      temp[indexToEdit].name = card.name;
      temp[indexToEdit].ingredients = card.ingredients;
      temp[indexToEdit].instructions = card.instructions;
      temp[indexToEdit].notes = card.notes;
      setSmoothies(temp);
    } else {
      alert("This name is already taken! Please enter another name.");
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
              <SmoothieForm addCard={addCard} newId={newId} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
