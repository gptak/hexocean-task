import { useState } from "react";
import { useField } from "react-final-form";
import { MenuItem, Select, InputLabel } from "@mui/material";
import FormElement from "./FormElement";

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

  const errorMsgs = { errorMsg: error, submitErrorMsg: submitError };

  const inputProps = {
    ...props,
    error: !!(touched && (error || submitError)),
    ...input,
  };

  return (
    <FormElement {...inputProps} {...errorMsgs}>
      <InputLabel>{inputProps.label}</InputLabel>
      <Select
        style={{ width: "100%" }}
        value={option}
        onChange={handleChange}
        {...inputProps}
      >
        {inputProps.options.map((opt) => (
          <MenuItem value={opt} key={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>
    </FormElement>
  );
}
