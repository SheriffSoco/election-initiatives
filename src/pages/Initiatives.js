import { Link } from "react-router-dom";

const DUMMY_DATA = [
  {
    id: 14,
    subject: "Legislative Accountability 1",
    ballotTitle:
      "Amends Constitution: Legislators with ten unexcused absences from floor sessions disqualified from holding next term of office:",
    stage: "Measure on General Election ballot",
  },
];

function InitiativesPage() {
  return (
    <div>
      <ul>{DUMMY_DATA.map((measure) => <Link to="/measure">{measure.id}</Link>)}</ul>
    </div>
  );
}

export default InitiativesPage;
