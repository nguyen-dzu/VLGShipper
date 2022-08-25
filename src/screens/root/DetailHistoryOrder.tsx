import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, View } from "react-native";
import { Text } from "../../components/common";
import Loader from "../../components/common/Loader";
import { Colors, Icons, Style } from "../../constant";
import { RootStackParamList, StackParamList } from "../../types";
const widthScreen = Dimensions.get("window").width;

export default function ({
  navigation,
  route,
}: StackScreenProps<StackParamList, "HistoryOrder">) {
  const [infoRes, setInfoRes]: any = useState([]);
  const item: any = route.params;
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    item.orderDetails[0]?.product
      ? setInfoRes(item.orderDetails[0]?.product?.restaurant)
      : "";
      setLoading(!loading)
  }, []);

  return (
    <ScrollView>
      <Loader loading={loading} />
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
                        Địa Chỉ:
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          lineHeight: 25,
                          width: 230
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
                  {item.shippingFee?.toLocaleString("vi", {
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
                  {item.total?.toLocaleString("vi", {
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
  );
}
