import "./PetitionerCard.css";

function PetitionerCard(props) {
  return (
    <ul className="petitioner">
      <li>
        <b>{props.name}</b>
      </li>
      <li>{props.address}</li>
      <li>{props.city}</li>
      <li>{props.phone}</li>
    </ul>
  );
}

export default PetitionerCard;
