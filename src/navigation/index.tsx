import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { useState } from "react";
import { storage, toast } from "../helpers";
import { actions } from "../reduxStore/slices";
import Loader from "../components/common/Loader";
import * as SplashScreen from "expo-splash-screen";
import RootNavigator from "./RootNavigator";
import AuthNavigator from "./AuthNavigator";

export default function Navigation() {
  const dispatch = useAppDispatch();
  const { isLoading, token } = useAppSelector((state) => state.auth);
  const { isShowLoader } = useAppSelector(state => state.loader)
  React.useEffect(() => {
    getToken();
  }, []);

  async function getToken() {
    try {
      const token = await storage.get("token");
      if (token) {
        dispatch(actions.auth.login(token));
        dispatch(actions.auth.restoreToken(token));
        SplashScreen.hideAsync();
      } else {
        dispatch(actions.auth.restoreToken(token));
        SplashScreen.hideAsync();
      }
    } catch (error) {
      toast.error(error);
    }
  }
  if (isLoading) return null

  return (
    <NavigationContainer>
      {token ? <RootNavigator /> : <AuthNavigator />}
      <Loader loading={isShowLoader} />
    </NavigationContainer>
  );
}
