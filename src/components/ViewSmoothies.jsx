/**
 * @name ViewSmoothies
 * @desc Highest component in hierarchy that displays both SmoothieDisplay and SmoothieDetail.
 */

import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SmoothieDisplay from "./SmoothieDisplay";
import SmoothieDetail from "./SmoothieDetail";
import axios from "axios";

class ViewSmoothies extends Component {
  constructor(props) {
    super(props);

    //store state of smoothie cards in array; activeSmoothie shows SmoothieDetail once card is clicked
    this.state = {
      smoothies: [],
      activeSmoothie: null,
    };

    //binding for setting current smoothie card into this.state.activeSmoothie
    this.getDetails = this.getDetails.bind(this);
  }
  //get smoothie details from selected card will be displayed based on conditional rendering logic below
  getDetails(card) {
    this.setState({
      activeSmoothie: card,
    });
  }
  //
}

export default ViewSmoothies;
