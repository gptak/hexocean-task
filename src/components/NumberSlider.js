import React from "react";
import { useField } from "react-final-form";
import { Slider, Typography } from "@mui/material";
import FormElement from "./FormElement";

export default function NumberSlider(props) {
  const {
    input,
    meta: { error, submitError },
  } = useField(props.name, {
    initialValue: props.initialValue,
    validate: props.validate,
  });

  const errorMsgs = { errorMsg: error, submitErrorMsg: submitError };

  const inputProps = {
    ...props,
    error: error || submitError,
    ...input,
  };

  return (
    <FormElement {...inputProps} {...errorMsgs}>
      <Typography style={{ marginLeft: "10px", marginBottom: "10px" }}>
        {props.label}
      </Typography>
      <Slider {...inputProps} style={{ width: "90%", marginLeft: "5%" }} />
    </FormElement>
  );
}
