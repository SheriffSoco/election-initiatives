import { useState } from "react";
import Button from "../form-elements/Button";
import Card from "../ui/Card";

import classes from "./AboutSection.module.css";
import PetitionerCard from "./PetitionerCard";

function AboutSection(props) {
  const [section, setSection] = useState("text");

  function showTextHandler() {
    setSection("text");
  }

  function showPetitionerHandler() {
    setSection("petitioner");
  }

  return (
    <div className={classes.root}>
      <Button tab tabActive={section === "text"} onClick={showTextHandler}>
        About this Initiative Petition
      </Button>
      <Button
        tab
        tabActive={section === "petitioner"}
        onClick={showPetitionerHandler}
      >
        About Chief Petitioners
      </Button>
      {section === "text" ? (
        <Card>
          <div className={classes.ballot}>
            <p>
              <b>{props.ballotTitle}</b>
            </p>
          </div>
          <div className={classes.text}>
            <p>
              This proposal is meant to severely curtail the ability of the
              minority party to freeze legislative action by walking away from
              the Capitol, as Republicans did repeatedly in 2019 and 2020. Under
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
              block a bill that could have capped greenhouse gass emissions in
              the state, ultimately dooming the proposal. Gov. Kate Brown
              responded by taking executive action instead.
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
      ) : (
        <Card>
          <div className={classes.ballot}>
            <ul className={classes.petitioners}>
              {props.petitioners.map((petitioner) => (
                petitioner.name !== "" && <PetitionerCard
                name={petitioner.name}
                address={petitioner.address}
                city={petitioner.city}
                phone={petitioner.phone}
              />
              ))}
            </ul>
          </div>
        </Card>
      )}
    </div>
  );
}

export default AboutSection;
