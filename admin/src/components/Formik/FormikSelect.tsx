import React from "react";
import { ErrorMessage, Field } from "formik";



type Props = {
  label: string;
  name: string;
  values: any[];
  value?:any;
  onChange?: (value: any) => void;
};

const FormikSelect = (props: Props) => {
  return (
    <div className="mb-3">
      <label className="form-label">{props.label}</label>
      <Field
        name={props.name}
        as="select"
        className="form-control"
        onChange={props.onChange}
        value={props.value}
      >
     
      {props.values.map( (value:any) => (
      <option key={value.id} value={value.id}>{value.name.toUpperCase()}</option>) 
      )}
      </Field>
      <ErrorMessage name={props.name}>
        {(message) => <span className="alert-text">{message}</span>}
      </ErrorMessage>
    </div>
  );
};

export default FormikSelect;
