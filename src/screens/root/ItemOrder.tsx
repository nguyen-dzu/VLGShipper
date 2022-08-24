import { useNavigation } from "@react-navigation/core";
import React, { memo, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { shipperApi } from "../../api";
import { INewOrder } from "../../api/apiInterfaces";
import { Button, Text } from "../../components/common";
import { Colors, Style } from "../../constant";
import { toast } from "../../helpers";

export default function ItemOrder({ item }: { item: INewOrder }) {
    const navigation = useNavigation()
    const handelReceived = (item: any) => {
        const acceptOrder = async () => {
            const response = await shipperApi.acceptOrder(item.id)
            if(response) {
                toast.success('Nhận Đơn Thành Công')
                navigation.navigate('DetailOrder', response.data)
            }
        }
        acceptOrder()
    }
    const handelCanel = (item: any) =>{
      const shipperCancel = async () => {
        const response = await shipperApi.cancel(item.id)
        if(response){
          toast.success('Hủy Đơn Hàng Thành Công')
        }
      }
      shipperCancel()
    }
  return (
    <SafeAreaView>
      <View style={styles.containerOrder}>
        <Text style={styles.titleOrder}>Đơn Hàng Mới</Text>
        {item.orderDetails
          ? item.orderDetails.map((item, index) => {
              const { restaurant } = item.product;
              return (
                <View key={index + 1}>
                  <Text style={styles.headerOrder}>Thông Tin Cửa Hàng</Text>
                  <View style={styles.desOrder}>
                    <Text style={styles.textOrder}>Tên Quán: </Text>
                    <Text>{restaurant.name}</Text>
                  </View>
                  <View style={styles.desOrder}>
                    <Text style={styles.textOrder}>Địa Chỉ: </Text>
                    <Text>{restaurant.address}</Text>
                  </View>
                  <View style={styles.desOrder}>
                    <Text style={styles.textOrder}>Số Điện Thoại: </Text>
                    <Text style={{ color: Colors.error }}>
                      {restaurant.user?.phoneNumber
                        ? restaurant.user.phoneNumber
                        : "Không Có Số Diện Thoại"}
                    </Text>
                  </View>
                </View>
              );
            })
          : ""}

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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          style={{
            width: 100,
            backgroundColor: Colors.gray3,
          }}
          onPress={() => handelCanel(item)}
        >
          <Text
            style={{
              color: Colors.black,
            }}
          >
            Hủy
          </Text>
        </Button>
        <Button
          style={{
            width: 100,
            backgroundColor: Colors.dark.mainColor,
          }}
          onPress={() => handelReceived(item)}
        >
          <Text
            style={{
              color: Colors.white,
            }}
          >
            Nhận Đơn
          </Text>
        </Button>
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
    lineHeight: 25,
  },
  desOrder: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
