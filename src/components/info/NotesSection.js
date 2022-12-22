import Card from "../ui/Card";
import NotesCard from "./NotesCard";

import "./NotesSection.css";

function NotesSection(props) {
  return (
    <Card>
      <div className="text">
        {props.notes.map((note) => (
          <NotesCard key={note.date} date={note.date} text={note.text} />
        ))}
      </div>
    </Card>
  );
}

export default NotesSection;
