import React from "react";
import { Form } from "react-final-form";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";

export function FormTemplate(props) {
  return (
    <Form
      onSubmit={props.onSubmit}
      validate={props.validate}
      render={(renderProps) => (
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "80vh" }}
        >
          <Grid item xs={3}>
            <form onSubmit={renderProps.handleSubmit}>
              {props.children(renderProps)}
              <Stack spacing={2} direction="row" justifyContent="center">
                <LoadingButton
                  margine="normal"
                  variant="contained"
                  size="large"
                  type="submit"
                  loading={renderProps.submitting}
                  disabled={renderProps.pristine}
                >
                  Submit
                </LoadingButton>
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
          </Grid>
        </Grid>
      )}
    />
  );
}
