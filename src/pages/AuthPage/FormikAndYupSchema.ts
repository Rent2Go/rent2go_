import { useTranslation } from 'react-i18next';
import { date, object, ref, string } from 'yup';
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

export function useSignupValidationSchema() {
  const { t } = useTranslation();

  return object({
  firstName: string()
    .required(t("firstNameRequired"))
    .min(2, t("firstNameMin"))
    .max(20, t('firstNameMax')),
  lastName: string()
    .required(t("lastNameRequired"))
    .min(2, t("lastNameMin"))
    .max(20, t('lastNameMax')),

  phoneNumber: string().required(t("phoneNumberRequired"))
    .matches(
      /^05\d{9}$/,
      t("phoneNumberFormat")
    ),
  email: string()
    .required(t("emailRequired"))
    .email(t("invalidEmail")),
  birthDate: date()
    .required(t("birthdateRequired"))
    .max(new Date(), t("birthdateMax")),
  idCardNumber: string()
    .required(t("idCardRequired"))
    .matches(/^\d{11}$/, t("idCardFormat")),
  password: string().required(t("passwordRequired"))
    .min(8, t("passwordMin"))
    .matches(/[a-z]/, t("passwordLowercase"))
    .matches(/[A-Z]/, t("passwordUppercase"))
    .matches(/\d/, t("passwordNumber"))
    .matches(/[!@#$%^&*()_+{}|:;<>,.?/~`]/, t("passwordPunctuation")),
  confirmpassword: string().required(t("passwordRequired"))
    .oneOf([ref('password')], t('passwordsNotMatch'))
}); }

export function useSigninValidationSchema() {
  const { t } = useTranslation();

  return object({
  email: string()
    .required(t("emailRequired"))
    .email(t("invalidEmail")),
  password: string()
    .required(t("passwordRequired"))
});
}




