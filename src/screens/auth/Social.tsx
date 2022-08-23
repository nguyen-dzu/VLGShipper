import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Link, Text } from "../../components/common";
import { Colors, Style } from "../../constant";

export default function ({
  type,
  onPress,
}: {
  type: "login"| "signUp" ;
  onPress: () => void;
}) {
  return (
    <View style={{}}>
      <View style={[Style.row, { justifyContent: "center" }]}>
        <Text>
          {type === "login"? "Chưa có tài khoản?" : "Đã có tài khoản?"}
        </Text>
        <Link
          textStyle={{ fontWeight: "bold", color: Colors.dark.mainColor }}
          onPress={onPress}
        >
          {type === "login" ? "Đăng ký" : "Đăng nhập"}
        </Link>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  socialButton: {
    height: 56,
    borderWidth: 1,
    borderColor: Colors.dark.mainColor,
    ...Style.mb,
    ...Style.borderRadius,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  socialIcon: {
    marginRight: 20,
  },
  socialText: {
    flex: 1,
    textAlign: "center",
    fontFamily: "bold",
    color: "#7A7A7A",
  },
});
