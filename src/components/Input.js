import React from "react";
import { useField } from "react-final-form";
import { TextField } from "@mui/material";
import FormElement from "./FormElement";

export default function Input({
  name,
  label,
  placeholder,
  type,
  inputProps,
  InputLabelProps,
  initialValue,
  validate,
}) {
  const {
    input: { value, onChange },
    meta: { touched, error, submitError },
  } = useField(name, {
    initialValue: initialValue,
    validate: validate,
  });

  const errorMsg = error;
  const submitErrorMsg = submitError;
  const isErrorVisible = !!(touched && (error || submitError));

  const properties = {
    name,
    label,
    placeholder,
    type,
    inputProps,
    InputLabelProps,
    error: isErrorVisible,
    value,
    onChange,
  };

  return (
    <FormElement
      isErrorVisible={isErrorVisible}
      errorMsg={errorMsg}
      submitErrorMsg={submitErrorMsg}
    >
      <TextField {...properties} style={{ width: "100%" }} />
    </FormElement>
  );
}
