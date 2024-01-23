
import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { Form } from 'react-bootstrap';


const FormikInput: React.FC<any> = ({
  name,
  type,
  placeholder,
  label,
  ...rest
}) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className="form-control"
        {...rest}
      />
      <ErrorMessage name={name} component="div" className="text-danger" >{message => <span  className="text-danger " >{message}</span>}</ErrorMessage>
    </Form.Group>
  );
};

export default FormikInput;