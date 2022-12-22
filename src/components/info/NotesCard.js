import "./NotesCard.css";

function NotesCard(props) {
  return (
    <ul className="item">
      <li className="date">{props.date}</li>
      <span className="line" />
      <li className="note">{props.text}</li>
    </ul>
  );
}

export default NotesCard;
