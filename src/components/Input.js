import React from "react";
import { useField } from "react-final-form";

export function Input(props) {
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
      <input {...inputProps} />
      {(error || submitError) && touched && <span>{error || submitError}</span>}
    </div>
  );
}
