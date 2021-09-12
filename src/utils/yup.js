import * as yup from "yup";

export const schemaRegister = yup.object().shape({
  email: yup
    .string()
    .email("Email không hợp lệ!")
    .required("Vui lòng nhập dữ liệu"),
  password: yup
    .string()
    .min(8, "Mật khẩu có tối thiểu 8 ký tự")
    .required("Vui lòng nhập dữ liệu"),
  cPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Mật khẩu không khớp"),
});
export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("Email không hợp lệ!")
    .required("Vui lòng nhập dữ liệu"),
  password: yup
    .string()
    .min(8, "Mật khẩu có tối thiểu 8 ký tự")
    .required("Vui lòng nhập dữ liệu"),
});
export const schemaEdit = yup.object().shape({
  name: yup.string(),
});
