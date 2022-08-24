import { useNavigation } from "@react-navigation/core";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { shipperApi } from "../../api";
import { Text } from "../../components/common";
import { Colors, Icons } from "../../constant";
import Header from "./Header";
const widthScreen = Dimensions.get("window").width;

export default function ManagerScreen() {
  const navigation = useNavigation()
  const [toDoList, setToDoList] = useState([]);
  useEffect(() => {
    const fetchHistory = async () => {
      const response = await shipperApi.getHistoryOrder();
      setToDoList(response.data);
    };
    fetchHistory();
  }, []);

  function renderItem({ item }: { item: any }) {
    return (
      <View>
        <Text style={{
          textAlign: 'right',
          marginTop: 20,
          fontSize: 18,
          fontWeight: '300',
          color: Colors.black
        }}>{moment(item.createdAt).format("h:mm a - YYYY-MM-DD")}</Text>
        <TouchableOpacity style={styles.containerItem} onPress = {() => navigation.navigate('HistoryOrder', item)}>
          <View >
            <Text style={{ paddingLeft: 13, fontSize: 18, fontWeight: "300" }}>
             Tên Khách Hàng:   {item.creator.fullName}
            </Text>
            <Text style={{ paddingLeft: 13, fontSize: 18, fontWeight: "300" }}>
             Địa Chỉ Giao:   {item.address}
            </Text>
          </View>
          <Icons.ArrowRight
            color={Colors.black}
            style={{ width: 20, height: 20, paddingRight: 40 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <>
      <Header />
      <View
        style={{
          alignItems: "center",
        }}
      >
        <FlatList
          data={toDoList}
          keyExtractor={(item, index) => String(index + 1)}
          renderItem={renderItem}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#F8F8F8",
    height: 70,
    marginBottom: 15,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: widthScreen * 0.9,
  },
});
