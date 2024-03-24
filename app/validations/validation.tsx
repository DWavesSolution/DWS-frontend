import * as Yup from "yup";
import { variables } from "./variables";
const { required, IsEmail } = variables;
export const FormValidation = Yup.object({
  name: Yup.string()
    .required(required)
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  email: Yup.string().required(required).email(IsEmail),
  phone: Yup.string()
    .required(required)
    .matches(/^[0-9]+$/gi, "Only number is allowed"),
  message: Yup.string().required(required),
  // .matches(
  //   /^[a-zA-Z0-9\s]+$/,
  //   "Only alphabets and numbers are allowed for this field"
  // ),
});
