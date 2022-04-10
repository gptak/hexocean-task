import React from "react";
import { useField } from "react-final-form";
import { Slider, Typography } from "@mui/material";
import FormElement from "./FormElement";

export default function NumberSlider({
  name,
  marks,
  min,
  max,
  label,
  step,
  valueLabelDisplay,
  initialValue,
  validate,
}) {
  const {
    input: { value, onChange },
    meta: { error, submitError },
  } = useField(name, {
    initialValue: initialValue,
    validate: validate,
  });

  const errorMsg = error;
  const submitErrorMsg = submitError;
  const isErrorVisible = !!(error || submitError);

  const properties = {
    name,
    marks,
    min,
    max,
    label,
    step,
    valueLabelDisplay,
    validate,
    error: error || submitError,
    value,
    onChange,
  };

  return (
    <FormElement
      isErrorVisible={isErrorVisible}
      errorMsg={errorMsg}
      submitErrorMsg={submitErrorMsg}
    >
      <Typography style={{ marginLeft: "10px", marginBottom: "10px" }}>
        {label}
      </Typography>
      <Slider {...properties} style={{ width: "90%", marginLeft: "5%" }} />
    </FormElement>
  );
}
