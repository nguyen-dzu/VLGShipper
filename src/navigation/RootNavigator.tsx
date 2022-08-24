import { StackRouter } from "@react-navigation/core";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Navigation from ".";
import { authApi } from "../api";
import { toast } from "../helpers";
import { Login } from "../screens/auth";
import { DetailHistoryOrder } from "../screens/root";
import DetailOrder from "../screens/root/DetailOrder";

import { RootStackParamList, StackScreenProps } from "../types";
import AuthNavigator from "./AuthNavigator";
import BottomTabNavigator from "./TabNavigate";

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
  {
    name: "HistoryOrder",
    component: DetailHistoryOrder,
    options: {
      headerTitle: "Thông Tin Chi Tiết Lịch Sử Đơn Hàng",
    },
  },
];
const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />

      {screens.map((screen: any) => (
        <Stack.Screen
          name={screen.name}
          key={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
