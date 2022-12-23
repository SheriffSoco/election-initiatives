import Card from "../ui/Card";

import classes from "./StatusSection.module.css";

function StatusSection(props) {
  let statusText = "";
  if (props.lastStatus) {
    switch (props.lastStatus.type) {
      case "petition-filed":
        statusText =
          "This petition has just been filed. It must be approved for circulation before it can be signed. Contact the cheif petitioners if you would like to sponsor the petition.";
        break;
      case "sponsors-submitted":
        statusText =
          "This petition has just submitted its sponsorship signatures for verification. Once the signatures are verified, the petition can be signed for general submission.";
        break;
      case ("sponsors-verified", "paid-circulation", "volunteer-circulation"):
        statusText =
          "This petition has been verified and can acquire signatures.";
        break;
      case "monthly-submission":
        statusText =
          "This petition has been verified and can acquire signatures. This petition has already gathered "+ props.lastStatus.total +" signatures from petition sheets.";
        break;
      case "signatures-submitted":
        statusText =
          props.lastStatus.signatures +
          " signatures have been submitted for approval. This petition can no longer be signed.";
        break;
      case "petition-qualified":
        statusText = "This petition has qualified for the General Ballot!";
        break;
      case "measure-created":
        statusText =
          "This petition has qualified for the General Ballot! It is " +
          props.lastStatus.text +
          ".";
        break;
      default:
        statusText = "";
    }
  }

  return (
    <div>
      <h2>Status</h2>
      <Card>
        <div className={classes.text}>
          <p>{statusText}</p>
        </div>
      </Card>
    </div>
  );
}

export default StatusSection;
