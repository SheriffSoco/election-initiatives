import { useReducer, useCallback } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "input-change":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) continue;
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      let inputValue;
      if (action.dropdown) {
        inputValue = {
          value: action.value,
          dropdown: action.dropdown,
          isValid: action.isValid,
        };
      } else {
        inputValue = {
          value: action.value,
          isValid: action.isValid,
        };
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: inputValue,
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

export function useForm(initialInputs, initialFormValidity) {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  const inputHandler = useCallback((id, value, dropdown, isValid) => {
    if (dropdown === "") {
      dispatch({
        type: "input-change",
        inputId: id,
        value: value,
        isValid: isValid,
      });
    } else {
      dispatch({
        type: "input-change",
        inputId: id,
        value: value,
        dropdown: dropdown,
        isValid: isValid,
      });
    }
  }, []);

  return [formState, inputHandler];
}
