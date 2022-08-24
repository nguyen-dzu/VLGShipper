import React from "react";
import { StyleSheet } from "react-native";
import { DetailHistoryOrder } from "../screens/root";
import DetailOrder from "../screens/root/DetailOrder";


import { RootStackParamList, StackScreenProps } from "../types";
import Navigator from "./Navigator";


interface IStackScreen extends StackScreenProps {
  name: keyof RootStackParamList;
}

const screens: IStackScreen[] = [
  {
    name: "DetailOrder",
    component: DetailOrder,
    options: {
      headerTitle: "Thông Tin Chi Tiết Đơn Hàng",
    },
  },{
    name: "HistoryOrder",
    component: DetailHistoryOrder,
    options: {
      headerTitle: "Thông Tin Chi Tiết Lịch Sử Đơn Hàng",
    },
  },
];

export default function RootNavigator() {
  return (
    <>
      <Navigator screens={screens} initialRouteName="Home" />
    </>
  );
}

const styles = StyleSheet.create({});
