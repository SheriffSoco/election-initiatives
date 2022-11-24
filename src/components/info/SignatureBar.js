import classes from "./SignatureBar.module.css";

function SignatureBar(props) {
  const remaining = parseInt(props.max) - props.count;

  function signPetition() {
    console.log("yay!");
  }

  return (
    <div className={classes.signature}>
      <ul>
        <li>
          <div className={classes.infoText}>
            <div>0</div>
            <div>{remaining.toLocaleString()} signatures to go!</div>
            <div>{props.max.toLocaleString()}</div>
          </div>
        </li>
        <li>
          <div className={classes.emptyBar}>
            <div className={classes.filledBar}></div>
          </div>
        </li>
      </ul>
      <div className={classes.sign}>
        <button onClick={signPetition}>
          <b>Sign Here</b>
        </button>
      </div>
    </div>
  );
}

export default SignatureBar;
