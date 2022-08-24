import api from "./api";
import { IForgot, ILogin, IProfile} from "./apiInterfaces";
import API_CONSTANTS from "./constrant";

export default {
  login: (params: ILogin): any => {
    return api.post(API_CONSTANTS.AUTH.LOGIN, params);
  },
  getProfile: () => {
    return api.get(API_CONSTANTS.AUTH.GET_INFOR)
  }
}; 