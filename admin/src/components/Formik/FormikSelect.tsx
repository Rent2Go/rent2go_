import React from "react";
import { ErrorMessage, Field } from "formik";
import { ColorModel } from "../../models/responses/colors/ColorModel";
import { colors } from "@mui/material";

type Props = {
  label: string;
  name: string;
  id:string;
  colors: any[];
};

const FormikSelect = (props: Props) => {
  console.log(props.colors)
  return (
    <div className="mb-3">
      <label className="form-label">{props.label}</label>
      <Field
        name={props.name}
        as="select"
        className="form-control"
      >
      {props.colors.map( (color) => (<option value={color.id}>{color.name.toUpperCase()}</option>) )}
      </Field>
      <ErrorMessage name={props.name}>
        {(message) => <span className="alert-text">{message}</span>}
      </ErrorMessage>
    </div>
  );
};

export default FormikSelect;
