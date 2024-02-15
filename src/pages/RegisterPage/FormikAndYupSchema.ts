import { date, object, ref, string } from "yup";
import { signUpRequest } from "../../models/requests/auth/SignupRequest";
import { SignInRequest } from "../../models/requests/auth/SignInRequest";

export const signUpinitialValues: signUpRequest = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  birthDate: new Date(),
  idCardNumber: "",
  password: "",
  confirmpassword: "",
};

export const signIninitialValues: SignInRequest = {
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
  birthDate: date()
    .required("Birthdate field is required.")
    .max(new Date(), "Birthdate cannot be in the future "),
  idCardNumber: string()
    .required("ID Card field is required.")
    .matches(/^\d{11}$/, "ID Card number must be exactly 11 digits."),
  password: string().required("Password field is required.")
    .min(8, "Password must be at least 8 characters.")
    .matches(/[a-z]/, "Password must include at least one lowercase letter.")
    .matches(/[A-Z]/, "Password must include at least one uppercase letter.")
    .matches(/\d/, "Password must include at least one number.")
    .matches(/[!@#$%^&*()_+{}|:;<>,.?/~`]/, "Password must include at least one punctuation mark."),
  confirmpassword: string().required("Password field is required.")
    .oneOf([ref('password')], 'Passwords do not match')
});


export const signInValidationSchema = object({
  email: string()
    .required("Email field is required.")
    .email("Invalid email format."),
  password: string()
    .required("Password field is required.")
});





