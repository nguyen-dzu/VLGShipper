import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, View } from "react-native";
import { shipperApi } from "../../api";
import { INewOrder } from "../../api/apiInterfaces";
import { Button, Text } from "../../components/common";
import { Colors, Icons, Style } from "../../constant";
import { toast } from "../../helpers";
import { RootStackParamList, StackParamList } from "../../types";
const widthScreen = Dimensions.get("window").width;
export default function DetailOrder({
  navigation,
  route,
}: StackScreenProps<StackParamList, "DetailOrder">) {
  const item: any = route.params;
  const [infoRes, setInfoRes]: any = useState([]);
  const [loading, setLoading] = useState(false);
  const [orderInfo, setOrderInfo]: any = useState([]);
  const [statusFinish, setStatusFinish]: any = useState([]);
  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await shipperApi.acceptOrder(item.id);
      const { data } = response;
      data.orderDetails[0]?.product
        ? setInfoRes(data.orderDetails[0]?.product?.restaurant)
        : "";
      setOrderInfo(data);
    };
    fetchOrderData();
  }, [loading, statusFinish]);
  const handelFinish = (item: any) => {
    const fetchFinish = async () => {
      const response = await shipperApi.finish(item.id);
      if (response) {
        toast.success("Bạn Đã Hoàn Thành Đơn Hàng");
        setStatusFinish(response.data);
        setLoading(!loading);
        navigation.navigate('Home')
      }
    };
    fetchFinish();
  };
  return (
    <>
      <ScrollView>
        <SafeAreaView
          style={{
            alignItems: "center",
          }}
        >
          {orderInfo ? (
            <>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  color: Colors.dark.mainColor,
                  lineHeight: 40,
                }}
              >
                Đơn Hàng
              </Text>
              <View
                style={{
                  backgroundColor: Colors.white,
                  width: widthScreen * 0.9,
                  borderRadius: 30,
                  padding: 25,
                  ...Style.shadow,
                }}
              >
                <View style={{}}>
                  <Text
                    style={{
                      color: Colors.gray2,
                      fontSize: 16,
                      fontWeight: "600",
                      lineHeight: 30,
                      textAlign: "center",
                    }}
                  >
                    Sản Phẩm
                  </Text>
                  {orderInfo.orderDetails
                    ? orderInfo.orderDetails.map((item: any) => {
                        return (
                          <View key={item.orderId}>
                            <View
                              style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                paddingVertical: 10,
                              }}
                            >
                              <View>
                                <Text
                                  style={{
                                    lineHeight: 25,
                                    fontSize: 16,
                                  }}
                                >
                                  Tên Sản Phẩm: {item.product.name}
                                </Text>
                                <Text
                                  style={{
                                    lineHeight: 25,
                                    fontSize: 16,
                                  }}
                                >
                                  Số Lượng: {item.amount}
                                </Text>
                              </View>

                              <Text
                                style={{
                                  lineHeight: 25,
                                  fontSize: 16,
                                }}
                              >
                                {item.product.price.toLocaleString("vi", {
                                  style: "currency",
                                  currency: "VND",
                                })}
                              </Text>
                            </View>
                          </View>
                        );
                      })
                    : ""}
                </View>
                <View
                  style={{
                    marginVertical: 15,
                  }}
                >
                  <Text
                    style={{
                      color: Colors.gray2,
                      fontSize: 16,
                      fontWeight: "600",
                      textAlign: "center",
                      lineHeight: 30,
                    }}
                  >
                    Quán Ăn <Icons.Tick color={Colors.tertiary} />
                  </Text>
                  {infoRes ? (
                    <View key={infoRes.id}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            lineHeight: 25,
                          }}
                        >
                          Tên Cửa Hàng:
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            lineHeight: 25,
                          }}
                        >
                          {infoRes.name}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            lineHeight: 25,
                          }}
                        >
                          Địa Chỉ:{" "}
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            lineHeight: 25,
                          }}
                        >
                          {infoRes.address}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            lineHeight: 25,
                          }}
                        >
                          Số Điện Thoại:
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            lineHeight: 25,
                          }}
                        >
                          {infoRes.address}
                        </Text>
                      </View>
                    </View>
                  ) : (
                    ""
                  )}
                </View>
                <View>
                  <Text
                    style={{
                      color: Colors.gray2,
                      fontSize: 16,
                      fontWeight: "600",
                      textAlign: "center",
                      lineHeight: 30,
                    }}
                  >
                    Khách Hàng <Icons.Tick color={Colors.tertiary} />
                  </Text>
                  {item.creator ? (
                    <View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            lineHeight: 25,
                          }}
                        >
                          Tên Khách Hàng:
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            lineHeight: 25,
                          }}
                        >
                          {item.creator.fullName}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            lineHeight: 25,
                          }}
                        >
                          Số Điện Thoại
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            lineHeight: 25,
                          }}
                        >
                          {item.creator.phoneNumber}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            lineHeight: 25,
                          }}
                        >
                          Email
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            lineHeight: 25,
                          }}
                        >
                          {item.creator.emailAddress}
                        </Text>
                      </View>
                    </View>
                  ) : (
                    ""
                  )}
                </View>
              </View>
              <View
                style={{
                  backgroundColor: Colors.white,
                  width: widthScreen * 0.9,
                  borderRadius: 30,
                  padding: 25,
                  marginVertical: 20,
                  ...Style.shadow,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      color: Colors.gray2,
                      fontSize: 16,
                      fontWeight: "600",
                      lineHeight: 30,
                    }}
                  >
                    Trạng Thái:{" "}
                  </Text>
                  <Text>
                    {orderInfo.orderStatus == 0 ? (
                      <Text
                        style={{
                          color: Colors.warning,
                        }}
                      >
                        Đang Chờ
                      </Text>
                    ) : orderInfo.orderStatus == 1 ? (
                      <Text
                        style={{
                          color: Colors.tertiary,
                        }}
                      >
                        Đang Chuẩn Bị
                      </Text>
                    ) : orderInfo.orderStatus == 2 ? (
                      <Text
                        style={{
                          color: Colors.tertiary,
                        }}
                      >
                        Đang Giao
                      </Text>
                    ) : orderInfo.orderStatus == 3 ? (
                      <Text
                        style={{
                          color: Colors.success,
                        }}
                      >
                        Đã Hoàn Thành
                      </Text>
                    ) : orderInfo.orderStatus == 4 ? (
                      <Text
                        style={{
                          color: Colors.error,
                        }}
                      >
                        Đã Hủy
                      </Text>
                    ) : (
                      ""
                    )}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      color: Colors.gray2,
                      fontSize: 16,
                      fontWeight: "600",
                      lineHeight: 30,
                    }}
                  >
                    Phí Ship:{" "}
                  </Text>
                  <Text
                    style={{
                      color: Colors.dark.mainColor,
                    }}
                  >
                    {orderInfo.shippingFee?.toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      color: Colors.gray2,
                      fontSize: 16,
                      fontWeight: "600",
                      lineHeight: 30,
                    }}
                  >
                    Tổng Đơn Hàng:{" "}
                  </Text>
                  <Text
                    style={{
                      color: Colors.dark.mainColor,
                    }}
                  >
                    {orderInfo.total?.toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </Text>
                </View>
              </View>
            </>
          ) : (
            ""
          )}
        </SafeAreaView>
      </ScrollView>
      <View
        style={{
          margin: 25,
        }}
      >
        <View>
          {item.orderStatus == 2 ? (
            <Button onPress={() => handelFinish(item)}>
              Hoàn Thành Đơn Hàng !!!
            </Button>
          ) : (
            <Button onPress={() => navigation.navigate("Home")}>Đã Hủy</Button>
          )}
        </View>
      </View>
    </>
  );
}
