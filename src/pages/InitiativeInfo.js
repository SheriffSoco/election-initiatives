import { useParams } from "react-router-dom";
import AboutSection from "../components/info/AboutSection";
import SignatureBar from "../components/info/SignatureBar";
import InitiativeTitle from "../components/info/InitiativeTitle";
import FullTextLink from "../components/info/FullTextLink";
import StatusSection from "../components/info/StatusSection";
import HeaderImage from "../components/info/HeaderImage";

import Data from "../local/data";
import "./InitiativeInfo.css";


function InitiativeInfoPage(props) {
  const { id } = useParams();
  let info = Data.filter(function (data) {
    return data.id === id;
  });
  if (info.length !== 0) {
    info = info[0];
    return (
      <div>
        <HeaderImage height="20rem" image={info.image}/>
        <SignatureBar count={10000} max={info.signatures}/>
        <InitiativeTitle alt={false} type={info.type} id={info.id} subject={info.subject} />
        <AboutSection type={info.type} ballotTitle={info.ballotTitle} />
        <FullTextLink />
        <StatusSection />
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
