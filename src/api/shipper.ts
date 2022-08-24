import api from "./api";
import { INewOrder } from "./apiInterfaces";
import API_CONSTANTS from "./constrant";

export default {
  getOrderByShipper: (): any => {
    return api.get(API_CONSTANTS.ORDER.GET_ORDER_SHIPPER);
  },
  handelStatus: (): any => {
    return api.get(API_CONSTANTS.SHIPPER.STATUS);
  },
  acceptOrder: (id: any): any => {
    return api.get(API_CONSTANTS.SHIPPER.ACCEPT_ORDER(id))
  },
  cancel: (id: any): any =>{
    return api.get(API_CONSTANTS.SHIPPER.CANCEL(id))

  },
  finish: (id: any): any =>{
    return api.get(API_CONSTANTS.SHIPPER.FINISH(id))
  },
  getHistoryOrder: () => {
    return api.get(API_CONSTANTS.SHIPPER.HISTORY_ORDER)
  }
}; 