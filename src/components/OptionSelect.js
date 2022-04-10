import { useState } from "react";
import { useField } from "react-final-form";
import { MenuItem, Select, InputLabel } from "@mui/material";
import FormElement from "./FormElement";

export default function OptionSelect({
  label,
  name,
  options,
  initialValue,
  validate,
}) {
  const [option, setOption] = useState("");

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const {
    input: { value, onChange },
    meta: { error, touched, submitError },
  } = useField(name, {
    initialValue: initialValue,
    validate: validate,
  });

  const errorMsg = error;
  const submitErrorMsg = submitError;
  const isErrorVisible = !!(touched && (error || submitError));

  const properties = {
    label,
    name,
    options,
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
      <InputLabel>{label}</InputLabel>
      <Select
        style={{ width: "100%" }}
        value={option}
        onChange={handleChange}
        {...properties}
      >
        {options.map((opt) => (
          <MenuItem value={opt} key={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>
    </FormElement>
  );
}
