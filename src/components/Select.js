import React from "react";
import { useField } from "react-final-form";

export function Select(props) {
  const {
    input,
    meta: { error, touched, submitError },
  } = useField(props.name, {
    initialValue: props.initialValue,
    validate: props.validate,
  });

  const inputProps = {
    ...props,
    error: (touched && error) || "",
    ...input,
  };

  return (
    <div>
      <label>{inputProps.label}</label>
      <select value="" {...inputProps}>
        <option value="" disabled>
          -- please choose an option --
        </option>
        {inputProps.options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      {(error || submitError) && touched && <span>{error || submitError}</span>}
    </div>
  );
}
