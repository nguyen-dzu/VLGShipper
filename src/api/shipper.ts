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
  unAccpectOrder: (id: any): any =>{
    return api.get(API_CONSTANTS.SHIPPER.UN_ACC_ORDER(id))
  },
  finish: (id: any): any =>{
    return api.get(API_CONSTANTS.SHIPPER.FINISH(id))
  },
  getHistoryOrder: (postList: any): any => {
    return api.get(API_CONSTANTS.SHIPPER.HISTORY_ORDER(postList))
  },
  getHistoryOrderAll: (): any => {
    return api.get(API_CONSTANTS.SHIPPER.HISTORY_ORDER_ALL())
  }
}; 