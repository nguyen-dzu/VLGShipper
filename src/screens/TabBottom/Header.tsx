import React from "react";
import { View } from "react-native";
import { Image } from "../../components/common";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View
      style={{
        paddingTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: '#fff'
      }}
    >
      <View style={{
      }}>
        <Image
          style={{
            width: 50,
            height: 50,
          }}
          source={require("../../assets/images/logoHeader.png")}
        />
      </View>
      <View
        style={{
          width: "40%",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginRight: 10,
        }}
      >
        <MaterialCommunityIcons name="bell-ring" size={24} color="black" />
      </View>
    </View>
  );
}
