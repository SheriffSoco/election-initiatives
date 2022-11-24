import Card from "../ui/Card";

import classes from "./StatusSection.module.css";

function StatusSection() {
  return (
    <div>
      <h2>Status</h2>
      <Card>
        <div className={classes.text}>
          <p>Here is the latest information on how signature gathering works</p>
        </div>
      </Card>
    </div>
  );
}

export default StatusSection;
