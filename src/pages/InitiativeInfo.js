import { Link, useParams } from "react-router-dom";

import Data from "../local/data";

function InitiativeInfoPage(props) {
  const { id } = useParams();
  let info = Data.filter(function (data) {
    return data.id === id;
  });
  if (info.length !== 0) {
    info = info[0];
  }
  return (
    <div>
      <p>Initiative: {info.id}</p>
      <p>Description: {info.subject}</p>
      <div>
        <Link to="/">Back</Link>
      </div>
    </div>
  );
}

export default InitiativeInfoPage;
