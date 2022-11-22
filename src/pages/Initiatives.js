import { Link } from "react-router-dom";

import Data from "../local/data";

function InitiativesPage() {
  return (
    <div>
      <ul>{Data.map((measure) => <Link key={measure.id} to={"/measure/" + measure.id}>{measure.id}</Link>)}</ul>
    </div>
  );
}

export default InitiativesPage;
