import { useForm, useFormState } from "react-final-form";
import { Button, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export default function Buttons() {
  const { submitting, pristine } = useFormState();
  const { reset } = useForm();

  return (
    <Stack spacing={2} direction="row" justifyContent="center">
      <LoadingButton
        margine="normal"
        variant="contained"
        size="large"
        type="submit"
        loading={submitting}
        disabled={pristine}
      >
        Submit
      </LoadingButton>
      <Button
        size="large"
        variant="outlined"
        onClick={() => {
          reset();
        }}
        disabled={submitting || pristine}
      >
        Reset
      </Button>
    </Stack>
  );
}
