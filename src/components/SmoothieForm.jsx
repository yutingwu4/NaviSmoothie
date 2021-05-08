/**
 * @name SmoothieForm
 * @user Component that allows user to create a new smoothie.
 */

import React, { Component } from "react";

class SmoothieForm extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: "",
      instructions: "",
      notes: "",
    };
  }
  render() {
    return <div></div>;
  }
}

export default SmoothieForm;
