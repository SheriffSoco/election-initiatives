import Card from "../ui/Card";

import classes from "./AboutSection.module.css";

function AboutSection(props) {
  return (
    <div>
      <h2>About this Initiative Petition</h2>
      <Card>
        <div className={classes.ballot}>
          <p>
            <b>
              {" "}
              Amends Constitution: Legislators with ten unexcused absences from
              floor sessions disqualified from holding next term of office.
            </b>
          </p>
        </div>
      </Card>
      <Card>
        <div className={classes.text}>
          <p>
            This proposal is meant to severely curtail the ability of the
            minority party to freeze legislative action by walking away from the
            Capitol, as Republicans did repeatedly in 2019 and 2020. Under
            quorum rules set out in the state constitution, two-thirds of a
            legislative chamber's lawmakers must be present in order for the
            chamber to conduct business.
          </p>
          <p>
            Both parties have employed legislative walkouts to achieve their
            aims in recent decades. Democrats abandoned Salem briefly in 2001,
            amid a political skirmish over redistricting. But with Republicans
            now holding minority status in both chambers, it's been the GOP
            using what the party considers a nuclear option most recently.
          </p>
          <p>
            Republicans fled the state in 2019 and again in 2020 in order to
            block a bill that could have capped greenhouse gass emissions in the
            state, ultimately dooming the proposal. Gov. Kate Brown responded by
            taking executive action instead.
          </p>
          <p>
            <i>
              text copied from{" "}
              <a href="https://www.opb.org/article/2022/07/05/oregon-capitol-legislative-walkouts-ballot-measures-november-election-2022/">
                here
              </a>
            </i>
          </p>
        </div>
      </Card>
    </div>
  );
}

export default AboutSection;
