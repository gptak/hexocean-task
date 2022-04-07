import React from "react";
import { Form } from "react-final-form";

export function FormTemplate(props) {
  return (
    <Form
      onSubmit={props.onSubmit}
      validate={props.validate}
      render={(renderProps) => (
        <form onSubmit={renderProps.handleSubmit}>
          {props.children(renderProps)}
          <div>
            <button type="submit" disabled={renderProps.submitting}>
              Submit
            </button>
            <button
              type="button"
              onClick={renderProps.form.reset}
              disabled={renderProps.submitting}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    />
  );
}
