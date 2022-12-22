import React from "react";
import Button from "../form-elements/Button";

import classes from "./SignatureButton.module.css";

function SignatureButton(props) {
  let disabled = false;
  let buttonString = "SIGN HERE";
  if (props.lastStatus) {
    const type = props.lastStatus.type;
    // const type = "volunteer-circulation";
    switch (type) {
      case "petition-filed":
        disabled = true;
        break;
      case "sponsors-submitted":
        disabled = true;
        break;
      case "sponsors-verified":
        disabled = true;
        break;
      case "paid-circulation":
        disabled = false;
        break;
      case "volunteer-circulation":
        disabled = false;
        break;
      case "monthly-submission":
        disabled = false;
        break;
      case "signatures-submitted":
        disabled = true;
        break;
      case "petition-qualified":
        disabled = true;
        break;
      case "measure-created":
        disabled = true;
        break;
      default:
        disabled = true;
    }
  }

  return (
    <div className={classes.sign}>
      <Button onClick={props.onClick} disabled={disabled}>
        <b>{buttonString}</b>
      </Button>
    </div>
  );
}

export default SignatureButton;
