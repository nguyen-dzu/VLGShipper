import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { useConfirmExitApp } from "../../hooks";
import { AuthStackParamList } from "../../types";
import * as Yup from "yup";
import { validation } from "../../configs/validationInput";
import { toast } from "../../helpers";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Link, Text, TextInput } from "../../components/common";
import { Formik } from "formik";
import Social from "./Social";
import { Colors } from "../../constant";
import { authApi } from "../../api";
import { IResetPassword } from "../../api/apiInterfaces";
import KeyboardAwareScrollView from "../../components/common/KeyboardAwareScrollView";

export default function ResetPassword({
  navigation,
}: StackScreenProps<AuthStackParamList, "ResetPassword">) {
  const [loading, setLoading] = useState(false);

  useConfirmExitApp();
  const initialValues = {
    emailAddress: "",
    code: "",
    password: "",
    passwordConfirm: "",
  };
  const title = {
    emailAddress: "Email",
    code: "Mã",
    password: "Mật Khẩu",
    passwordConfirm: "Nhập Lại Mật Khẩu",
  };
  const validationSchema = Yup.object().shape({
    emailAddress: validation.emailAddress(title.emailAddress),
    code: validation.string(title.code),
    password: validation.password(title.password),
    passwordConfirm: validation.password_confirmation(title.passwordConfirm),
  });
  async function ForgotPass(params: IResetPassword) {
    setLoading(true);
    let loginParam = {
      emailAddress: params.emailAddress,
      code: params.code,
      password: params.password,
      passwordConfirm: params.passwordConfirm,
    };
    console.log(loginParam);
    try {
      const data = await authApi.resetPass(loginParam);
      setLoading(false);
      toast.success("Thay Đổi Mật Khẩu Thành Công");
      if (data) {
        navigation.replace("Login");
      } else {
        toast.error("email không tồn tại");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Sai Dữ Liệu");
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
                <TextInput
                  label="Mã Xác Thực"
                  onChangeText={handleChange("code")}
                  onBlur={handleBlur("code")}
                  value={values.code}
                  placeholder="Mã được gửi vào email của bạn"
                  error={errors.code}
                  touched={touched.code}
                  icon="code"
                  keyboardType= 'number-pad'
                  
                />
                <TextInput
                  label="Mật khẩu"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  placeholder="Mật khẩu mới"
                  error={errors.password}
                  touched={touched.password}
                  icon="lock"
                  secureTextEntry={true}
                />
                <TextInput
                  label="Xác nhận mật khẩu"
                  onChangeText={handleChange("passwordConfirm")}
                  onBlur={handleBlur("passwordConfirm")}
                  value={values.passwordConfirm}
                  placeholder="Xác nhận mật khẩu"
                  error={errors.passwordConfirm}
                  touched={touched.passwordConfirm}
                  icon="lock"
                  secureTextEntry={true}
                />
                <Button
                  style={styles.buttonLogin}
                  onPress={handleSubmit as () => void}
                >
                  Xác Nhận
                </Button>

                <Social type="login" onPress={toLogin} />
                <View style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row'
                }}>
                <Link
                  textStyle={{ fontWeight: "bold", color: Colors.dark.mainColor, textAlign: 'center' }}
                  onPress={() => navigation.navigate("ForgotPassword")}
                >
                  Bạn Không Nhận Được Mã
                </Link>
                </View>
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
