import React from "react";
import { useField } from "react-final-form";
import { TextField } from "@mui/material";
import FormElement from "./FormElement";

export default function Input(props) {
  const {
    input,
    meta: { error, touched, submitError },
  } = useField(props.name, {
    initialValue: props.initialValue,
    validate: props.validate,
  });

  const errorMsgs = { errorMsg: error, submitErrorMsg: submitError };

  const inputProps = {
    ...props,
    error: !!(touched && (error || submitError)),
    ...input,
  };

  return (
    <FormElement {...inputProps} {...errorMsgs}>
      <TextField {...inputProps} variant="filled" style={{ width: "100%" }} />
    </FormElement>
  );
}
