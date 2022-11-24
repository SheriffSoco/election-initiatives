import classes from "./InitiativeTitle.module.css";

function InitiativeTitle(props) {
  return (
    <div className={classes.title}>
      <ul>
        <li className={classes.number}>
          {props.type}
          <br />
          <b>{props.id}</b>
        </li>
        <li className={classes.subject}>
          <h2>{props.subject}</h2>
        </li>
      </ul>
    </div>
  );
}

export default InitiativeTitle;
