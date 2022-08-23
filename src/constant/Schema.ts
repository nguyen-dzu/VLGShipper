import * as Yup from 'yup'
// import globalData from './GlobalData'

export default {
  name: Yup.string().required('Tên không được để trống'),

  email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),

  password: Yup.string()
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
    .max(20, 'Mật khẩu không được quá 20 ký tự')
    .required('Mật khẩu không được để trống'),

  passwordLogin: Yup.string().required('Mật khẩu không được để trống'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp')
    .required('Mật khẩu không được để trống'),

  default: (name: string) => Yup.string().trim().required(`${name} không được để trống`),
}
