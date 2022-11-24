import { Link, useParams } from "react-router-dom";
import AboutSection from "../components/info/AboutSection";
import SignatureBar from "../components/info/SignatureBar";
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
        <SignatureBar count={10000} max={info.signatures}/>
        <InitiativeTitle type={info.type} id={info.id} subject={info.subject} />
        <AboutSection type={info.type} ballotTitle={info.ballotTitle} />
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
