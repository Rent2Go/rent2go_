import React from "react";
import { ErrorMessage, Field } from "formik";

type Props = {
  label: string;
  name: string;
  id:string;
};

const FormikSelect = (props: Props) => {
  return (
    <div className="mb-3">
      <label className="form-label">{props.label}</label>
      <Field
        name={props.name}
        as="select"
        className="form-control"
      >
      <option value={props.id}>{props.name}</option>
      </Field>
      <ErrorMessage name={props.name}>
        {(message) => <span className="alert-text">{message}</span>}
      </ErrorMessage>
    </div>
  );
};

export default FormikSelect;
