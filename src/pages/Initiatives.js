import { Link } from "react-router-dom";
import InitiativeTitle from "../components/info/InitiativeTitle";

import Data from "../local/data";
import classes from "./Initiatives.module.css";

function InitiativesPage() {
  return (
    <div className={classes.list}>
      {Data.map((measure) => (
        <div key={measure.id} className={classes.item}>
          <Link to={"/measure/" + measure.id}>
            <InitiativeTitle
              alt={true}
              type={measure.type}
              id={measure.id}
              subject={measure.subject}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default InitiativesPage;
