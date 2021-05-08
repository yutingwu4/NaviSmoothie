import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SmoothieForm from "./components/SmoothieForm";
import ViewSmoothies from "./components/ViewSmoothies";

/**
 * @terms
 * Link: serves similar purpose as an <a> tag.
 * Route: conditionally rendering of components depending on path.
 * Switch: required in order to only render one component at a time.
 */

function App() {
  return (
    <div className="parentContainer">
      <Router>
        <div className="row ml-3">
          <ul className="list-inline">
            <Link className="customLink" to="/">
              <li className="customLink list-inline-item brand mr-3">
                Navi's Smoothies
              </li>
            </Link>
            <li className="list-inline-item mr-3">
              <Link className="customLink" to="/viewSmoothies">
                View All
              </Link>
            </li>
            <li className="list-inline-item mr-5">
              <Link className="customLink" to="/SmoothieForm">
                Create New!
              </Link>
            </li>
          </ul>
        </div>
        <div className="search">
          <form className="search-form">
            <input className="search-bar" type="text" />
            <button className="search-button" type="submit" placeholder="Where's mah smoothie?">
              Search
            </button>
          </form>
        </div>
        <div className="switchContainer">
          <Switch>
            <Route path="/viewSmoothies" component={ViewSmoothies} />
            <Route path="/SmoothieForm" component={SmoothieForm} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
