import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AboutSection from "../components/info/AboutSection";
import SignatureButton from "../components/info/SignatureButton";
import InitiativeTitle from "../components/info/InitiativeTitle";
import FullTextLink from "../components/info/FullTextLink";
import StatusSection from "../components/info/StatusSection";
import HeaderImage from "../components/info/HeaderImage";
import Button from "../components/form-elements/Button";
import Modal from "../components/ui/Modal";
import Input from "../components/form-elements/Input";
import { useForm } from "../components/hooks/useForm";
import { VALIDATOR_MINLENGTH, VALIDATOR_NAME, VALIDATOR_REQUIRE } from "../util/validators";

import Data from "../local/data";

function InitiativeInfoPage(props) {
  const [formState, inputHandler] = useForm(
    {
      firstName: { value: "", isValid: false },
      lastName: { value: "", isValid: false },
      address: { value: "", isValid: false },
      info: { value: "", dropdown: "", isValid: false },
    },
    false
  );
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  function openSignatureHandler() {
    setShowModal(true);
  }

  function closeSignatureHandler() {
    setShowModal(false);
  }

  function signPetitionHandler() {
    console.log(formState);
    navigate("./confirm");
  }

  const { id } = useParams();
  let info = Data.filter(function (data) {
    return data.id === id;
  });
  if (info.length !== 0) {
    info = info[0];
    const petitioners = [
      {
        name: info.petitionerOneName,
        address: info.petitionerOneAddress,
        city: info.petitionerOneCity,
        phone: info.petitionerOnePhone,
      },
      {
        name: info.petitionerTwoName,
        address: info.petitionerTwoAddress,
        city: info.petitionerTwoCity,
        phone: info.petitionerTwoPhone,
      },
      {
        name: info.petitionerThreeName,
        address: info.petitionerThreeAddress,
        city: info.petitionerThreeCity,
        phone: info.petitionerThreePhone,
      },
    ];
    const notes = info.status ?? [];
    let lastStatus = null;
    if (notes.length > 0) {
      lastStatus = notes[notes.length-1];
    }
    return (
      <React.Fragment>
        <Modal
          show={showModal}
          onCancel={closeSignatureHandler}
          header="Sign Petition"
          footer={
            <Button onClick={signPetitionHandler} disabled={!formState.isValid}>
              SIGN
            </Button>
          }
        >
          <Input
            id="firstName"
            element="input"
            type="text"
            label="First Name"
            validators={[VALIDATOR_NAME()]}
            errorText="Please enter a value"
            onInput={inputHandler}
          />
          <Input
            id="lastName"
            element="input"
            type="text"
            label="Last Name"
            validators={[VALIDATOR_NAME()]}
            errorText="Please enter a value"
            onInput={inputHandler}
          />
          <Input
            id="address"
            element="input"
            type="text"
            label="Address"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a value"
            onInput={inputHandler}
          />
          <Input
            id="info"
            element="dropdown-input"
            type="number"
            label="Info"
            dropdownList={["Driver's License", "Passport", "Social Security"]}
            validators={[[VALIDATOR_MINLENGTH(6)], [VALIDATOR_MINLENGTH(7)], [VALIDATOR_MINLENGTH(9)]]}
            errorText="Please enter a value"
            onInput={inputHandler}
          />
        </Modal>
        <HeaderImage height="20rem" image={info.image} />
        <br />
        <InitiativeTitle
          alt={false}
          type={info.type}
          id={info.id}
          subject={info.subject}
        />
        <AboutSection
          type={info.type}
          ballotTitle={info.ballotTitle}
          petitioners={petitioners}
          notes={notes}
        />
        <FullTextLink />
        <StatusSection lastStatus={lastStatus} />
        <SignatureButton
          onClick={openSignatureHandler}
          lastStatus={lastStatus}
        />
      </React.Fragment>
    );
  } else {
    return <div></div>;
  }
}

export default InitiativeInfoPage;
