import { useNavigation } from "@react-navigation/core";
import { StackScreenProps } from "@react-navigation/stack";
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
import { Text, TextInput } from "../../components/common";
import { Colors, Icons } from "../../constant";
import { StackParamList } from "../../types";
import Header from "./Header";
const widthScreen = Dimensions.get("window").width;

export default function ManagerScreen({
  navigation,
}: StackScreenProps<StackParamList, "Manager">) {
  const [reRenderItem, setReRenderItem] = useState([]);
  const [toDoList, setToDoList] = useState([]);
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchHistory = async () => {
      const response = await shipperApi.getHistoryOrder();
      setToDoList(response.data);
      setReRenderItem(response.data)
      setLoading(!loading);
    };
    fetchHistory();
  }, [toDoList, loading]);

  const handelSearch = (text: string) => {
    if (text) {
      const newData = reRenderItem.filter((item: any) => {
        console.log(item)
        const itemData = item.fullName ? item.fullName.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setToDoList(newData);
      setSearch(text);
    } else {
      setToDoList(reRenderItem);
      setSearch(text);
    }
  };
  function renderItem({ item }: { item: any }) {
    return (
      <View>
        <Text
          style={{
            textAlign: "right",
            marginTop: 20,
            fontSize: 18,
            fontWeight: "300",
            color: Colors.black,
          }}
        >
          {moment(item.createdAt).format("h:mm a - YYYY-MM-DD")}
        </Text>
        <TouchableOpacity
          style={styles.containerItem}
          onPress={() => navigation.navigate("HistoryOrder", item)}
        >
          <View>
            <Text style={{ paddingLeft: 13, fontSize: 18, fontWeight: "300" }}>
              Tên Khách Hàng: {item.creator.fullName}
            </Text>
            <Text style={{ paddingLeft: 13, fontSize: 18, fontWeight: "300" }}>
              Địa Chỉ Giao: {item.address}
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
          paddingVertical: 10,
          paddingHorizontal: 5,
          alignItems: "center",
        }}
      >
        <TextInput
          containerStyle={{ marginBottom: 0 }}
          placeholder="Tìm kiếm Món Ăn, Quán Ăn ... "
          style={{
            borderRadius: 30,
            width: widthScreen * 0.9,
          }}
          value={search}
          onChangeText={(text) => handelSearch(text)}
          icon={"search"}
        />
      </View>
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
