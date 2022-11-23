import { Link, useParams } from "react-router-dom";
import AboutSection from "../components/info/AboutSection";
import InitiativeTitle from "../components/InitiativeTitle";

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
        <InitiativeTitle type={info.type} id={info.id} subject={info.subject}/>
        <AboutSection />
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
      </div>
    );
  }
}

export default InitiativeInfoPage;
