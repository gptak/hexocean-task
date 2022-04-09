import { FormControl, FormHelperText } from "@mui/material";

export default function FormElement({ children, errorMsg, error, submitError,submitErrorMsg, touched}) {
 
  return (
    <FormControl
      variant="filled"
      sx={{ dispay: "block", minWidth: 220, marginBottom: "1.8em" }}
    >
      {children}
      {(error || submitError) && touched && (
        <FormHelperText
          style={{ position: "absolute", bottom: "-1.8em", color: "#d32f2f" }}
        >
          {errorMsg || submitErrorMsg}
        </FormHelperText>
      )}
    </FormControl>
  );
}
