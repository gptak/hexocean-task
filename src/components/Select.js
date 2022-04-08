import { useState } from "react";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useField } from "react-final-form";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import { FormHelperText } from "@mui/material";

export function OptionSelect(props) {
  const [option, setOption] = useState("");

  const handleChange = (event) => {
    setOption(event.target.value);
  };

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
      <FormControl
        variant="filled"
        helperText={error || submitError}
        margin="normal"
        sx={{ minWidth: 220 }}
      >
        {" "}
        <InputLabel>{inputProps.label}</InputLabel>
        <Select value={option} onChange={handleChange} {...inputProps}>
          {inputProps.options.map((opt) => (
            <MenuItem value={opt} key={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
        {(error || submitError) && touched && (
          <FormHelperText>{error || submitError}</FormHelperText>
        )}
      </FormControl>
    </div>
  );
}
