import * as yup from "yup";

export const registrationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter valid email address"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters.")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Please make sure your password match")
    .required("Confirm Password is required"),
  terms: yup.boolean().required("check box"),
});
