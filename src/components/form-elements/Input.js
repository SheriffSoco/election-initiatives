import { useReducer, useEffect } from "react";

import { validate } from "../../util/validators";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "change":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "touch":
      return {
        ...state,
        isTouched: true,
      };
    case "dropdown":
      return {
        ...state,
        dropdown: action.val,
        isValid: validate(state.value, action.validators),
      };
    default:
      return state;
  }
};

function Input(props) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    dropdown: props.dropdownList ? props.dropdownList[0] : "",
    isTouched: false,
    isValid: false,
  });

  const { id, onInput } = props;
  const { value, dropdown, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, dropdown, isValid);
  }, [id, value, dropdown, isValid, onInput]);

  const changeHandler = (event) => {
    let validators;
    if (props.dropdownList) {
        const index = props.dropdownList.indexOf(inputState.dropdown);
        validators = props.validators[index];
    }
    else {
        validators = props.validators;
    }
    dispatch({
      type: "change",
      val: event.target.value,
      validators: validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "touch",
    });
  };

  const dropdownHandler = (event) => {
    const index = props.dropdownList.indexOf(event.target.value);
    const validators = props.validators[index];
    dispatch({
      type: "dropdown",
      val: event.target.value,
      validators: validators,
    });
  };

  let element = null;
  switch (props.element) {
    case "input":
      element = (
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          onBlur={touchHandler}
          onChange={changeHandler}
          value={inputState.value}
        />
      );
      break;
    case "textarea":
      element = (
        <textarea
          id={props.id}
          rows={props.rows || 3}
          onChange={changeHandler}
          onBlur={touchHandler}
        />
      );
      break;
    case "dropdown-input":
      element = (
        <ul className="dropdown-input">
          <select
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            onChange={dropdownHandler}
            value={inputState.dropdown}
          >
            {props.dropdownList.map((str) => (
              <option key={str}>{str}</option>
            ))}
          </select>
          <input
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            onBlur={touchHandler}
            onChange={changeHandler}
            value={inputState.value}
          />
        </ul>
      );
      break;
    default:
      element = (
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          onBlur={touchHandler}
          onChange={changeHandler}
          value={inputState.value}
        />
      );
      break;
  }

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
}

export default Input;
