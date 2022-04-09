import { FormControl, FormHelperText } from "@mui/material";

export default function FormElement({
  children,
  errorMsg,
  error,
  submitErrorMsg,
}) {
  return (
    <FormControl
      variant="filled"
      sx={{ display: "block", minWidth: 220, marginBottom: "1.8em" }}
    >
      {children}
      {error && (
        <FormHelperText
          style={{ position: "absolute", bottom: "-1.8em", color: "#d32f2f" }}
        >
          {errorMsg || submitErrorMsg}
        </FormHelperText>
      )}
    </FormControl>
  );
}
