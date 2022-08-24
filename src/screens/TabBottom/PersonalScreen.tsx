import { useNavigation } from "@react-navigation/core";
import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { authApi } from "../../api";
import { Avatar, Link, Text } from "../../components/common";
import { Colors, Icons } from "../../constant";
import { useAppDispatch } from "../../hooks/useRedux";
import { actions } from "../../reduxStore/slices";
import { BASE_URL, RootStackParamList, StackParamList } from "../../types";
import Header from "./Header";
const widthScreen = Dimensions.get("window").width;
function PersonalScreen({
  navigation,
}: StackScreenProps<StackParamList, "Personal">) {
  const dispatch = useAppDispatch();
  const [listInfo, setListInfo]: any = useState([]);
  const shippFee = 10000;
  useEffect(() => {
    const fetchProfile = async () => {
      const response = await authApi.getProfile();
      if (response) {
        setListInfo(response.data);
      }
    };
    fetchProfile();
  }, []);

  function Logout() {
    Alert.alert("Đăng xuất", "Bạn muốn đăng xuất?", [
      {
        text: "Đóng",
      },
      {
        text: "Đăng xuất",
        onPress: () => {
          navigation.replace('Login');
          dispatch(actions.auth.logout());
        },
      },
    ]);
  }

  return (
    <>
      <Header />
      <SafeAreaView
        style={{
          marginHorizontal: 18,
          marginVertical: 10,
          marginTop: 15,
        }}
      >
        {listInfo ? (
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Avatar source={{ uri: `${BASE_URL}/${listInfo.avatar}` }} />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    marginHorizontal: 15,
                    marginRight: "15%",
                  }}
                >
                  <Text
                    style={{
                      lineHeight: 25,
                      fontSize: 18,
                      fontWeight: "600",
                    }}
                  >
                    {listInfo.fullName}
                  </Text>
                  <Text
                    style={{
                      lineHeight: 25,
                    }}
                  >
                    {listInfo.phoneNumber}
                  </Text>
                  <Text
                    style={{
                      lineHeight: 25,
                    }}
                  >
                    {listInfo.emailAddress}
                  </Text>
                  <Link
                    textStyle={{
                      color: Colors.dark.mainColor,
                      textDecorationLine: "underline",
                      lineHeight: 25,
                      fontSize: 16,
                    }}
                    onPress={Logout}
                  >
                    Đăng Xuất
                  </Link>
                </View>
                <Icons.Edit />
              </View>
            </View>
          </View>
        ) : (
          ""
        )}
        <View
          style={{
            flexDirection: "row",
            marginVertical: 15,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: Colors.gray2,
            padding: 5,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: Colors.gray2,
            }}
          >
            Giá Shipp Hiện Tại:
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginHorizontal: 10,
              fontWeight: "300",
              color: Colors.dark.mainColor,
            }}
          >
            {shippFee.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.containerItem}>
            <Text style={{ paddingLeft: 13, fontSize: 20, fontWeight: "300" }}>
              Thông Tin Văn Lang Go
            </Text>
            <Icons.ArrowRight
              color={Colors.black}
              style={{ width: 20, height: 20, paddingRight: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerItem}>
            <Text style={{ paddingLeft: 13, fontSize: 20, fontWeight: "300" }}>
              Tin Tức Văn Lang
            </Text>
            <Icons.ArrowRight
              color={Colors.black}
              style={{ width: 20, height: 20, paddingRight: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerItem}>
            <Text style={{ paddingLeft: 13, fontSize: 20, fontWeight: "300" }}>
              Quy Tắc Ứng Sử
            </Text>
            <Icons.ArrowRight
              color={Colors.black}
              style={{ width: 20, height: 20, paddingRight: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerItem}>
            <Text style={{ paddingLeft: 13, fontSize: 20, fontWeight: "300" }}>
              Ngưng Làm Shipper
            </Text>
            <Icons.ArrowRight
              color={Colors.black}
              style={{ width: 20, height: 20, paddingRight: 40 }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#F8F8F8",
    height: 50,
    marginTop: 12,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: widthScreen * 0.9,
  },
});

export default PersonalScreen;
