import React from "react";
import { ErrorMessage, Field } from "formik";

type Props = {
  label: string;
  name: string;
  type?: string;
  placeHolder?: string;
};

const FormikSelect = (props: Props) => {
  return (
    <div className="mb-3">
      <label className="form-label">{props.label}</label>
      <Field
        name={props.name}
        as="select"
        className="form-control"
        placeholder={props.placeHolder}
      >
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      </Field>
      <ErrorMessage name={props.name}>
        {(message) => <span className="alert-text">{message}</span>}
      </ErrorMessage>
    </div>
  );
};

export default FormikSelect;
