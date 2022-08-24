import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import { ForgotPassword, Login, ResetPassword } from "../screens/auth";
// import { ConfirmCode, Login, SignUp } from 'screens/auth'
import { AuthStackParamList, StackParamList, StackScreenProps } from "../types";
import BottomTabNavigator from "./TabNavigate";

interface IStackScreen extends StackScreenProps {
  name: keyof AuthStackParamList;
}

const screens: IStackScreen[] = [
  {
    name: "Login",
    component: Login,
    options: {
      headerShown: false,
    },
  },
  {
    name: "ForgotPassword",
    component: ForgotPassword,
    options: {
      headerShown: false,
    },
  },
  {
    name: "ResetPassword",
    component: ResetPassword,
    options: {
      headerShown: false,
    },
  },
];
const Stack = createStackNavigator<StackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Tab" component={BottomTabNavigator} />
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
