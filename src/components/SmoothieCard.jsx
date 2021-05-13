/**
 * @name SmoothieCard
 * @desc Displays individual cards in SmoothieDisplay component.
 */

import React, { useState } from "react";
import SmoothieDetail from "./SmoothieDetail";
import { Modal, Button } from "react-bootstrap";

function SmoothieCard(props) {
  //update state for edit mode; default state as existing text
  const [tempName, setTempName] = useState(props.name);
  const [tempIngredients, setTempIngredients] = useState(props.ingredients);
  const [tempInstructions, setTempInstructions] = useState(props.instructions);
  const [tempNotes, setTempNotes] = useState(props.notes);

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

  //to delete card
  const removeSmoothie = () => {//can be renamed to handleDeletion
    //find current card we want to delete
    const cardObj = props.smoothies.filter(
      (smoothie) => smoothie.id === props.id
    );
    //confirm if we want to delete
    if (window.confirm("Sure you want to dump this smoothie?")) {
      props.deleteCard(cardObj[0]);
    }
  };

  //in edit mode
  const [editForm, setEditForm] = useState(false);
  //enter edit mode
  const editMode = () => {
    setEditForm(true);
  };

  //to edit card
  const saveChanges = () => {//can be renamed to handleSaveChanges
    const cardObj = {
      name: tempName,
      ingredients: tempIngredients,
      instructions: tempInstructions,
      notes: tempNotes,
      id: props.id,
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
              id={props.id}
            />
          ) : (
            <Modal.Title>Smoothie: {props.name}</Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          {editForm ? (
            <div className="editModal">
              <h5>Ingredients:</h5>
              <textarea
                className="editText"
                type="text"
                value={tempIngredients}
                onChange={(e) => setTempIngredients(e.target.value)}
                id={props.id}
              />
              <h5>Instructions:</h5>
              <textarea
                className="editText"
                type="text"
                value={tempInstructions}
                onChange={(e) => setTempInstructions(e.target.value)}
                id={props.id}
              />
              <h5>Notes:</h5>
              <textarea
                className="editText"
                type="text"
                value={tempNotes}
                onChange={(e) => setTempNotes(e.target.value)}
                id={props.id}
              />
            </div>
          ) : (
            <SmoothieDetail
              ingredients={props.ingredients}
              instructions={props.instructions}
              notes={props.notes}
              // id={props.id}
            />
          )}
        </Modal.Body>
        <Modal.Footer className="modalButtons">
          <Button variant="dark" className="mr-5" onClick={removeSmoothie}>
            Delete Card
          </Button>

          <Button
            variant="secondary"
            className="closeModalButton"
            onClick={handleClose}
          >
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
