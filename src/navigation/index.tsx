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
import RootNavigator from "./RootNavigator";
import AuthNavigator from "./AuthNavigator";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const isLogin = useAppSelector((state) => state.auth.isLogin);

  React.useEffect(() => {
    getToken();
  }, []);

  async function getToken() {
    setLoading(true);
    try {
      const token = await storage.get("token");
      if (token) {
        dispatch(actions.auth.login(token));
      }
    } catch (error) {
      toast.error(error);
    }
    setLoading(false);
  }

  return (
    <NavigationContainer
    >
      <Loader loading={loading} />
      {isLogin ? <RootNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
