/**
 * @name SmoothieCard
 * @desc Displays individual cards in SmoothieDisplay component.
 */

import React, { useState } from "react";
import SmoothieDetail from "./SmoothieDetail";
import { Modal, Button } from "react-bootstrap";
// import { Switch, Route } from "react-router-dom";

function SmoothieCard(props) {
  //update state for edit mode
  const [tempName, setTempName] = useState(props.name);
  const [tempIngredients, setTempIngredients] = useState(props.ingredients);
  const [tempInstructions, setTempInstructions] = useState("");
  const [tempNotes, setTempNotes] = useState("");

  //React bootstrap modal hooks
  const [show, setShow] = useState(false);

  //React bootstrap modal handleClicks
  const handleClose = () => {
    setShow(false);
    setEditForm(false);
  };

  const handleShow = () => {
    setShow(true);
    setEditForm(false);
  };

  //in edit mode
  const [editForm, setEditForm] = useState(false);

  //to delete card
  const removeSmoothie = (id) => {
    //find current card we want to delete
    const cardObj = props.smoothies.filter((smoothie) => smoothie.id === id);
    //confirm if we want to delete
    if (window.confirm("Sure you want to dump this smoothie?")) {
      props.deleteCard(cardObj);
    }
  };

  //enter edit mode
  const editMode = () => {
    setEditForm(true);
  };

  //to edit card
  const saveChanges = (id) => {
    const cardObj = {
      name: props.name,
      ingredients: props.ingredients,
      instructions: props.instructions,
      notes: props.notes,
    };
    props.saveCardEdit(cardObj);
    //exit back to view mode
    setEditForm(false);
  };

  return (
    <>
      <Button className="smoothie-card" variant="primary" onClick={handleShow}>
        <h3 className="card-title">
          <span>{props.name}</span>
        </h3>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {editForm ? (
            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
            />
          ) : (
            <Modal.Title>Smoothie: {props.name}</Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          {editForm ? (
            // <EditSmoothieForm
            //   ingredients={ingredients}
            //   instructions={instructions}
            //   notes={notes}
            //   id={id}
            //   setIngredients={}
            //   setInstructions={}
            //   setNotes={}
            // />
            <div>
              <label>Ingredients</label>
              <textarea
                type="text"
                value={tempIngredients}
                onChange={(e) => setTempIngredients(e.target.value)}
              />
            </div>
          ) : (
            <SmoothieDetail
              ingredients={props.ingredients}
              instructions={props.instructions}
              notes={props.notes}
              id={props.id}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" className="mr-5" onClick={removeSmoothie}>
            Delete Card
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {editForm ? (
            <Button variant="primary" onClick={saveChanges}>
              Save Changes
            </Button>
          ) : (
            <Button variant="primary" onClick={editMode}>
              Edit Card
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SmoothieCard;

// <div>
//   <button onClick={popupHandler} className="smoothie-card">
//     <h3 className="card-title">
//       <span className="smoothie-name">{name}</span>
//     </h3>
//     {showPopup ? (
//       <SmoothieDetail
//         name={name}
//         ingredients={ingredients}
//         instructions={instructions}
//         notes={notes}
//         closePopUp={closePopUpHandler}
//         id={id}
//       />
//     ) : null}
//     {/* <img className="smoothie_img" src={image} alt="smoothie-pic"></img> */}
//     </button>
//     </div>
