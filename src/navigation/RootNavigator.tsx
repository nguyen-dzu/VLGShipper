import React from "react";
import { StyleSheet } from "react-native";
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
