import React from "react";
import { ErrorMessage, Field } from "formik";

type Props = {
  label?: string;
  name: string;
  value?: any;
  type?: string | File;
  placeHolder?: string;
  onChange?: (value: any) => void

};

const FormikInput = (props: Props) => {
  return (
    
      <div className="mb-3">
        <label className="form-label">{props.label}</label>
        <Field
          name={props.name}
          type={props.type || "text"}
          className="form-control"
          value={props.value}
          placeholder={props.placeHolder}
          onChange={props.onChange}
        />
        <ErrorMessage name={props.name}>
          {(message) => <span className="alert-text">{message}</span>}
        </ErrorMessage>
      </div>
   
  );
};

export default FormikInput;
