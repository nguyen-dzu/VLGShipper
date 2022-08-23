import React from "react";
import { View } from "react-native";
import Image from "./Image";
import Text from "./Text";

export default function () {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={require("../../assets/icons/noData.png")} />
      <Text
        style={{
          marginVertical: 20,
        }}
      >
        Bạn Đang Không Có Đơn Hàng
      </Text>
    </View>
  );
}
