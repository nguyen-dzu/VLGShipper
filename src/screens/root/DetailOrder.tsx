import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Dimensions, SafeAreaView, ScrollView, View } from "react-native";
import { INewOrder } from "../../api/apiInterfaces";
import { Button, Text } from "../../components/common";
import { Colors, Icons, Style } from "../../constant";
import { RootStackParamList } from "../../types";
const widthScreen = Dimensions.get("window").width;
export default function DetailOrder({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "DetailOrder">) {
  const item: any = route.params;

  return (
    <>
      <ScrollView>
        <SafeAreaView
          style={{
            alignItems: "center",
          }}
        >
          {item ? (
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
                  {item.orderDetails
                    ? item.orderDetails.map((item: any) => {
                        return (
                          <View key={item.orderId}>
                            <View
                              style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <View>
                                <Text
                                  style={{
                                    lineHeight: 25,
                                    fontSize: 16,
                                  }}
                                >
                                  Số Lượng: {item.amount}
                                </Text>
                                <Text
                                  style={{
                                    lineHeight: 25,
                                    fontSize: 16,
                                  }}
                                >
                                  Tên Sản Phẩm: {item.product.name}
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
                <View style={{}}>
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
                  {item.orderDetails
                    ? item.orderDetails.map((item: any) => {
                        const { restaurant } = item.product;
                        return (
                          <View key={item.orderId}>
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
                                Tên Cửa Hàng:{" "}
                              </Text>
                              <Text
                                style={{
                                  fontSize: 16,
                                  lineHeight: 25,
                                }}
                              >
                                {restaurant.name}
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
                                {restaurant.address}
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
                                {restaurant.address}
                              </Text>
                            </View>
                          </View>
                        );
                      })
                    : ""}
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
                    {item.orderStatus == 0 ? (
                      <Text
                        style={{
                          color: Colors.warning,
                        }}
                      >
                        Đang Chờ
                      </Text>
                    ) : item.orderStatus == 1 ? (
                      <Text
                        style={{
                          color: Colors.tertiary,
                        }}
                      >
                        Đang Chuẩn Bị
                      </Text>
                    ) : item.orderStatus == 2 ? (
                      <Text
                        style={{
                          color: Colors.tertiary,
                        }}
                      >
                        Đang Giao
                      </Text>
                    ) : item.orderStatus == 3 ? (
                      <Text
                        style={{
                          color: Colors.success,
                        }}
                      >
                        Đã Hoàn Thành
                      </Text>
                    ) : item.orderStatus == 4 ? (
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
                    {item.shippingFee.toLocaleString("vi", {
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
                    {item.total.toLocaleString("vi", {
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
            <Button>Hoàn Thành Đơn Hàng !!!</Button>
          ) : item.orderStatus == 3 ? (
            <Button onPress={() => navigation.navigate('Home')}>Đã Hoàn Thành !!!</Button>
          ) : (
            <Button onPress={() => navigation.navigate('Home')}>Đã Hủy</Button>
          )}
        </View>
      </View>
    </>
  );
}
