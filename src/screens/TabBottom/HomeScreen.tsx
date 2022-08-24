import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { shipperApi } from "../../api";
import { INewOrder } from "../../api/apiInterfaces";
import { Button, Image, Switch, Text } from "../../components/common";
import { Colors, Style } from "../../constant";
import { toast } from "../../helpers";
import { ItemNewOrder } from "../root";
import NoData from "../../components/common/NoData";
import Header from "./Header";

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const [newOrder, setNewOrder]: any = useState([]);
  const [checkOrder, setCheckOrder] = useState(false);
  const [date, setDate]: any = useState();
  const [current, setCurrent]: any = useState();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fetchDataOrder = async () => {
      const response = await shipperApi.getOrderByShipper();
      if (response.data != null && open == true) {
        toast.success("Bạn Có Đơn Hàng Mới");
        setLoading(true);
        setCheckOrder(true);
        setNewOrder(response.data);
      }else{
        setLoading(false);
        setCheckOrder(false);
      }
    };

    if (open == true) {
      fetchDataOrder();
      setTimeout(() => {
        setLoading(!loading);
      }, 3000);
    }
  }, [loading, open]);

  useEffect(() => {
    let dateObj = new Date()
      .toISOString()
      .replace("-", " / ")
      .split("T")[0]
      .replace("-", " / ");
    setDate(dateObj);
    let current_date = new Date().getDay();
    let dayName = "";
    switch (current_date) {
      case 0:
        dayName = "Chủ Nhật";
        break;
      case 1:
        dayName = "Thứ Hai";
        break;
      case 2:
        dayName = "Thứ Ba";
        break;
      case 3:
        dayName = "Thứ Tư";
        break;
      case 4:
        dayName = "Thứ Năm";
        break;
      case 5:
        dayName = "Thứ Sáu";
        break;
      case 6:
        dayName = "Thứ Bảy";
        break;
      default:
        break;
    }
    setCurrent(dayName);
  }, [date]);
  useEffect(() => {
    handelOpen();
  }, []);

  const handelOpen = async () => {
    const response = await shipperApi.handelStatus();
    if (response) {
      setOpen(response.data);
    }
  };
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
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth: 1,
              borderColor: Colors.gray4,
              padding: 15,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: Colors.gray1,
                  fontSize: 18,
                  fontWeight: "600",
                }}
              >
                Tổng Số Dơn
              </Text>
              <Text
                style={{
                  color: Colors.gray1,
                  fontSize: 14,
                  fontWeight: "300",
                  lineHeight: 30,
                }}
              >
                {current}, {date}{" "}
              </Text>

              <Text
                style={{
                  color: Colors.dark.mainColor,
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                999 Đơn
              </Text>
            </View>
            <View
              style={{
                backgroundColor: Colors.gray4,
                width: 1,
                height: "90%",
              }}
            ></View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: Colors.gray1,
                  fontSize: 18,
                  fontWeight: "600",
                }}
              >
                Nhận Đơn
              </Text>
              <Text
                style={{
                  color: Colors.gray1,
                  fontSize: 15,
                  fontWeight: "300",
                  marginVertical: 5,
                }}
              >
                {open ? "Đang Bật" : "Đã Tắt"}
              </Text>
              <Switch value={open} onValueChange={handelOpen} />
            </View>
          </View>
          {/**
           * new order
           */}

          {checkOrder && open ? (
            newOrder ? (
              <ItemNewOrder item={newOrder} />
            ) : (
              <NoData />
            )
          ) : (
            <NoData />
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
