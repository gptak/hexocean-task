import React from "react";
import { Form } from "react-final-form";

export function FormTemplate(props) {
  return (
    <Form
      onSubmit={props.onSubmit}
      validate={props.validate}
      render={(renderProps) => (
        <form
          onSubmit={(event) => {
            renderProps.handleSubmit(event).then(() => {
              renderProps.form.reset();
            });
          }}
        >
          {props.children(renderProps)}
          <div>
            <button
              type="submit"
              disabled={renderProps.submitting || renderProps.pristine}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => {
                props.setShowSuccess(false);
                props.setShowError(false);
                renderProps.form.reset();
              }}
              disabled={renderProps.submitting || renderProps.pristine}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    />
  );
}
