import { useState } from "react";
import { useField } from "react-final-form";
import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";

export default function OptionSelect(props) {
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
    error: !!(touched && (error || submitError)),
    ...input,
  };

  return (
    <div>
      <FormControl
        variant="filled"
        sx={{ minWidth: 220, marginBottom: "1.8em" }}
      >
        <InputLabel>{inputProps.label}</InputLabel>
        <Select value={option} onChange={handleChange} {...inputProps}>
          {inputProps.options.map((opt) => (
            <MenuItem value={opt} key={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
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
