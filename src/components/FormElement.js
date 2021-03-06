import { FormControl, FormHelperText } from "@mui/material";

export default function FormElement({
  children,
  isErrorVisible,
  errorMsg,
  submitErrorMsg,
}) {
  return (
    <FormControl
      sx={{ display: "block", minWidth: 220, marginBottom: "2.1em" }}
    >
      {children}
      {isErrorVisible && (
        <FormHelperText
          style={{ position: "absolute", bottom: "-1.6em", color: "#d32f2f" }}
        >
          {errorMsg || submitErrorMsg}
        </FormHelperText>
      )}
    </FormControl>
  );
}
