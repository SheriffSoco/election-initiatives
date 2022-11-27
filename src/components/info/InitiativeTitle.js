import HeaderImage from "./HeaderImage";
import classes from "./InitiativeTitle.module.css";

function InitiativeTitle(props) {
  if (props.alt === false) {
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
  } else {
    return (
      <div>
        <div>
          <HeaderImage
            height="3.5rem"
            borderRadius="10px 10px 0 0"
            image="https://c8.alamy.com/comp/RM9E07/the-state-capital-building-adorned-with-the-oregon-pioneer-with-downtown-salem-in-the-background-RM9E07.jpg"
          />
        </div>
        <div className={classes.titleAlt}>
          <ul>
            <li className={classes.numberAlt}>
              {props.type}
              <br />
              <b>{props.id}</b>
            </li>
            <li className={classes.subject}>
              <h2>{props.subject}</h2>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default InitiativeTitle;
