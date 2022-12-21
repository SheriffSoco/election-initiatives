import React from "react";
import Button from "../form-elements/Button";

import classes from "./SignatureButton.module.css";

function SignatureButton(props) {
  return (
    <div className={classes.sign}>
      <Button onClick={props.onClick}>
        <b>SIGN HERE</b>
      </Button>
    </div>
  );
}

export default SignatureButton;
