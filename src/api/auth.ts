import api from "./api";
import { IForgot, ILogin, IProfile, IResetPassword} from "./apiInterfaces";
import API_CONSTANTS from "./constrant";

export default {
  login: (params: ILogin): any => {
    return api.post(API_CONSTANTS.AUTH.LOGIN, params);
  },
  getProfile: () => {
    return api.get(API_CONSTANTS.AUTH.GET_INFOR)
  },
  forgetPass : (email: IForgot) => {
    return api.post(API_CONSTANTS.AUTH.FORGOTPASSWORD(email))
  },
  resetPass: (params: IResetPassword) => {
    return api.post(API_CONSTANTS.AUTH.RESET_PASSWORD, params)
  },
  editProfile: (params: any) => {
    return api.put(API_CONSTANTS.AUTH.EDIT_PROFILE, params)
  }
}; 