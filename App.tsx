import Navigation from "./src/navigation";
import React, { useEffect } from "react";
import Toast, {
  BaseToast,
  BaseToastProps,
  ToastConfig,
} from "react-native-toast-message";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./src/reduxStore/store";
import { useAppSelector } from "./src/hooks/useRedux";
import { Colors, Layout } from "./src/constant";

const toastConfigParamDefault: BaseToastProps = {
  text2Style: {
    fontSize: 14,
    lineHeight: 18,
  },
  style: {
    height: "auto",
    paddingVertical: 10,
    minHeight: 60,
  },
  text2Props: { numberOfLines: 5 },
};

const toastConfig: ToastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      {...toastConfigParamDefault}
      style={[
        toastConfigParamDefault.style,
        { borderLeftColor: Colors.success },
      ]}
    />
  ),
  error: (props) => (
    <BaseToast
      {...props}
      {...toastConfigParamDefault}
      style={[toastConfigParamDefault.style, { borderLeftColor: Colors.error }]}
    />
  ),
  info: (props) => (
    <BaseToast
      {...props}
      {...toastConfigParamDefault}
      style={[
        toastConfigParamDefault.style,
        { borderLeftColor: Colors.warning },
      ]}
    />
  ),
};

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
        <Toast
          topOffset={Layout.statusBarHeight + 10}
          visibilityTime={3000}
          config={toastConfig}
        />
      </PersistGate>
    </ReduxProvider>
  );
}
