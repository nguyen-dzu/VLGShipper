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
    CANCEL: (id: string) => `/api/Orders/${id}/CancelOrder`,
    FINISH: (id: string) => `/api/Orders/${id}/FinishOrder`,
    HISTORY_ORDER: `/api/Orders/HistoryOrder` 
  }
}

export default API_CONSTANTS
