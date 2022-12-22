import { useParams } from "react-router-dom";
import Button from "../components/form-elements/Button";
import Card from "../components/ui/Card";

import Data from "../local/data";
import "./Confirmed.css";

function ConfirmedPage() {
  const { id } = useParams();
  let info = Data.filter(function (data) {
    return data.id === id;
  });
  if (info.length !== 0) {
    info = info[0];
    return (
      <div className="center">
        <Card>
          <p>Your signature for {info.type} {info.id} has been sent</p>
          <Button to="./..">RETURN TO INITIATIVE INFO</Button>
        </Card>
      </div>
    );
  }
}

export default ConfirmedPage;
