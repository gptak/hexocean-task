import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import { FormHelperText } from "@mui/material";

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
    error: !!(touched && (error || submitError)),
    ...input,
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 220, marginBottom: "1.8em" }}>
        <TextField {...inputProps} variant="filled" style={{ minWidth: 220 }} />
        {(error || submitError) && touched && (
          <FormHelperText
            style={{ position: "absolute", bottom: "-1.8em", color: "#d32f2f" }}
          >
            {error || submitError}
          </FormHelperText>
        )}
      </FormControl>
    </div>
  );
}
