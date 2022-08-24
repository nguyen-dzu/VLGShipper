import { StackScreenProps } from "@react-navigation/stack";
import { Formik } from "formik";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "../../components/common";
import { toast } from "../../helpers";
import { useConfirmExitApp } from "../../hooks";
import { AuthStackParamList } from "../../types";
import * as Yup from "yup";
import { validation } from "../../configs/validationInput";
import { authApi } from "../../api";
import { IForgot } from "../../api/apiInterfaces";
import { Colors } from "../../constant";
import Social from "./Social";
import KeyboardAwareScrollView from "../../components/common/KeyboardAwareScrollView";

export default function ForgotPassword({
  navigation,
}: StackScreenProps<AuthStackParamList, "ForgotPassword">) {
  const [loading, setLoading] = useState(false);

  useConfirmExitApp();
  const initialValues = {
    emailAddress: "",
  };
  const title = {
    emailAddress: "Email",
  };
  const validationSchema = Yup.object().shape({
    emailAddress: validation.emailAddress(title.emailAddress),
  });
  async function ForgotPass(params: IForgot) {
    setLoading(true);
    try {
      const data = await authApi.forgetPass(params);
      setLoading(false);
      toast.success("vào mail của bạn để lấy mã đăng nhập nhé");
      if (data) {
        navigation.replace("ResetPassword");
        toast.warning("Kiểm Tra Email Của Bạn Để Có Thông Tin Đăng Nhập Nhé !");
      } else {
        toast.error("email không tồn tại");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  }
  const toLogin = () => {
    navigation.replace("Login");
  };
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView style={{ paddingHorizontal: 30 }}>
        <Text style={styles.heading}>Lấy Lại Mật Khẩu</Text>
        <Formik
          initialValues={initialValues}
          onSubmit={ForgotPass}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => {
            return (
              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <TextInput
                  label="Email"
                  onChangeText={handleChange("emailAddress")}
                  onBlur={handleBlur("emailAddress")}
                  value={values.emailAddress}
                  placeholder="examble: abc@gmail.com"
                  error={errors.emailAddress}
                  touched={touched.emailAddress}
                  icon="mail"
                />
                <Button
                  style={styles.buttonLogin}
                  onPress={handleSubmit as () => void}
                >
                  Gửi
                </Button>

                <Social type="signUp" onPress={toLogin} />
              </View>
            );
          }}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 30,
    color: Colors.gray1,
    textTransform: "uppercase",
    marginTop: 100,
    marginBottom: 35,
    fontSize: 25,
  },
  buttonLogin: {
    backgroundColor: Colors.dark.mainColor,
  },
});
