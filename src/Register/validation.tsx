import * as yup from "yup";

export const registrationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  username: yup.string().required("UserName  is required"),
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters.")
    .required("Confirm Password is required"),
  terms: yup.boolean().required("check box"),
  //   gender: yup.string().notRequired(),
  //   address: yup.string().notRequired(),
  //   phonenumber: yup.string().notRequired(),
});
