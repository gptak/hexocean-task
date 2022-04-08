import { TextField } from "@mui/material";

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
    error: touched && (error || submitError),
    ...input,
  };

  return (
    <div>
      <TextField
        {...inputProps}
        margin="normal"
        variant="filled"
        helperText={error || submitError}
      />
    </div>
  );
}
