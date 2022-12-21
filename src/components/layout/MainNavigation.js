import React from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <React.Fragment>
      <div className={classes.header}>
        <Link to="/">
          <h1>Get Measured</h1>
        </Link>
        <ul>
          <li>
            <Link to="/">
              <b>Initiatives</b>
            </Link>
          </li>
          <li>
            <Link to="/">
              <b>About</b>
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.padding}></div>
    </React.Fragment>
  );
}

export default MainNavigation;
