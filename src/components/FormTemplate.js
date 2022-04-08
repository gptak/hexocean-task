import React from "react";
import { Form } from "react-final-form";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";

export function FormTemplate(props) {
  return (
    <Form
      onSubmit={props.onSubmit}
      validate={props.validate}
      render={(renderProps) => (
        <form onSubmit={renderProps.handleSubmit}>
          {props.children(renderProps)}
          <Stack spacing={2} direction="row">
            <Button
              margine="normal"
              variant="outlined"
              size="large"
              type="submit"
              disabled={renderProps.submitting || renderProps.pristine}
            >
              Submit
            </Button>
            <Button
              size="large"
              variant="outlined"
              onClick={() => {
                props.setShowSuccess(false);
                renderProps.form.reset();
              }}
              disabled={renderProps.submitting || renderProps.pristine}
            >
              Reset
            </Button>
          </Stack>
        </form>
      )}
    />
  );
}
