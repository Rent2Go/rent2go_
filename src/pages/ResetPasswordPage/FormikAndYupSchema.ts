import { object, string } from "yup";

export const signUpinitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
};

export const signIninitialValues = {
  email: "",
  password: "",
};

export const signupValidationSchema = object({
  firstName: string()
    .required("First Name field is required.")
    .min(2, "First Name field must be at least 2 characters.")
    .max(20, 'The field cannot exceed 20 characters.'),
  lastName: string()
    .required("Last Name field is required.")
    .min(2, "Last Name field must be at least 2 characters.")
    .max(20, 'The field cannot exceed 20 characters.')
  ,

  phoneNumber: string().required("Phone number is required.")
    .matches(
      /^05\d{9}$/,
      "Phone number must be in the format 05xxxxxxxxx."
    ),
  email: string()
    .required("Email field is required.")
    .email("Invalid email format."),
  password: string().required("Password field is required.")
    .min(8, "Password must be at least 8 characters.")
    .matches(/[a-z]/, "Password must include at least one lowercase letter.")
    .matches(/[A-Z]/, "Password must include at least one uppercase letter.")
    .matches(/\d/, "Password must include at least one number.")
    .matches(/[!@#$%^&*()_+{}|:;<>,.?/~`]/, "Password must include at least one punctuation mark."),
});


export const signInValidationSchema = object({
  email: string()
    .required("Email field is required.")
    .email("Invalid email format."),
  password: string()
    .required("Password field is required.")
});





