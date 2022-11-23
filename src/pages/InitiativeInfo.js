import { Link, useParams } from "react-router-dom";
import MainNavigation from "../components/layout/MainNavigation";

import Data from "../local/data";

function InitiativeInfoPage(props) {
  const { id } = useParams();
  let info = Data.filter(function (data) {
    return data.id === id;
  });
  if (info.length !== 0) {
    info = info[0];
    return (
      <div>
        {Object.keys(info).map((key, index) => {
          return (
            <p key={key}>
              {key}: {info[key]}
            </p>
          );
        })}
        <div>
          <Link to="/">Back</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <MainNavigation />
      </div>
    );
  }
}

export default InitiativeInfoPage;
