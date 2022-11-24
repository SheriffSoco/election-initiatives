import Card from "../ui/Card";
import classes from "./FullTextLink.module.css";

function FullTextLink() {
  return (
    <Card>
      <div className={classes.title}>
        <h2>
          <a href="https://egov.sos.state.or.us/elec/web_irr_search.record_detail?p_reference=20220014..LSCYYY.">
            Read the full text of the initiative here
          </a>
        </h2>
      </div>
    </Card>
  );
}

export default FullTextLink;
