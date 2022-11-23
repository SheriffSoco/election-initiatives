import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div className={classes.header}>
      <h1>Get Measured</h1>
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
  );
}

export default MainNavigation;
