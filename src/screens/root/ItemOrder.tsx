import { useNavigation } from "@react-navigation/core";
import React, { memo, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { shipperApi } from "../../api";
import { INewOrder } from "../../api/apiInterfaces";
import { Button, Text } from "../../components/common";
import { Colors, Style } from "../../constant";
import { toast } from "../../helpers";

export default function ItemOrder({ item }: { item: INewOrder }) {
  const navigation = useNavigation();
  const {restaurant} = item?.orderDetails[0]?.product;
  return (
    <SafeAreaView>
      <View style={styles.containerOrder}>
        <Text style={styles.titleOrder}>Đơn Hàng Mới</Text>
        {restaurant ? (
          <View>
            <Text style={styles.headerOrder}>Thông Tin Cửa Hàng</Text>
            <View style={styles.desOrder}>
              <Text style={styles.textOrder}>Tên Quán: </Text>
              <Text>{restaurant.name}</Text>
            </View>
            <View style={styles.desOrder}>
              <Text style={styles.textOrder}>Địa Chỉ: </Text>
              <Text style={{
                width: 250,
              }}>{restaurant.address}</Text>
            </View>
            <View style={styles.desOrder}>
              <Text style={styles.textOrder}>Số Điện Thoại: </Text>
              <Text style={{ color: Colors.error, lineHeight: 30 }}>
                {restaurant.user?.phoneNumber
                  ? restaurant.user.phoneNumber
                  : "Không Có Số Diện Thoại"}
              </Text>
            </View>
          </View>
        ) : (
          ""
        )}

        <View>
          <Text style={styles.headerOrder}>Thông Tin Người Nhận</Text>
          <View style={styles.desOrder}>
            <Text style={styles.textOrder}>Địa Chỉ: </Text>
            <Text>{item.address}</Text>
          </View>
          <View style={styles.desOrder}>
            <Text style={styles.textOrder}>Họ Tên: </Text>
            <Text>{item.creator?.fullName}</Text>
          </View>
          <View style={styles.desOrder}>
            <Text style={styles.textOrder}>Số Điện Thoại: </Text>
            <Text>{item.phoneNumber}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerOrder: {
    padding: 15,
    backgroundColor: "#fff",
    marginVertical: 15,
    borderRadius: 30,
    ...Style.shadow,
  },
  titleOrder: {
    textAlign: "center",
    marginVertical: 5,
    fontSize: 18,
    fontWeight: "600",
    color: Colors.dark.mainColor,
  },
  headerOrder: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.gray2,
  },
  textOrder: {
    fontSize: 16,
    color: Colors.gray2,
    fontWeight: "300",
    lineHeight: 30,
  },
  desOrder: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
