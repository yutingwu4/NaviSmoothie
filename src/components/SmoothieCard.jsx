/**
 * @name SmoothieCard
 * @desc Displays individual cards in SmoothieDisplay component.
 */

import React from "react";
import { Switch, Route } from "react-router-dom";

function SmoothieCard({ name, image }) {
  return (
    <Switch>
      <Route>
        <div className="smoothie-card">
          <h5 className="card-title">
            <span className="detailLabel">{name}</span>
          </h5>

          <img className="smoothie_img" src={image} alt="smoothie-pic"></img>
        </div>
      </Route>
    </Switch>
  );
}

export default SmoothieCard;
