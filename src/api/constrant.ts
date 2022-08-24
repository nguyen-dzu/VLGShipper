import { IForgot, INewOrder } from "./apiInterfaces"
const API_CONSTANTS = {
  AUTH: {
    LOGIN: '/api/Users/Login',
    GET_INFOR: '/api/Users/Profile',
    EDIT_PROFILE: '/api/Users/Profile',
    FORGOTPASSWORD: (email: IForgot) => `/api/Users/ForgotPassword?email=${email.emailAddress}`,
    RESET_PASSWORD: `/api/Users/ResetPassword`
  },
  ORDER: {
    GET_ORDER_SHIPPER: `/api/Orders/Shipper`,
  },
  SHIPPER: {
    STATUS: '/StatusShipper',
    ACCEPT_ORDER:(id: string) => `/api/Orders/${id}/AccpectOrder`,
    UN_ACC_ORDER: (id: string) => `/api/Orders/${id}/UnAccpectOrder`,
    FINISH: (id: string) => `/api/Orders/${id}/FinishOrder`,
    HISTORY_ORDER: (postList: any) => `/api/Orders/HistoryOrder?PageSize=${postList.PageSize}&Current=${postList.Current}` 
  }
}

export default API_CONSTANTS
