import {
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Colors } from "../constant"; 


import { ITab, RootStackParamList, RootTabParamList } from "../types";
import { Platform, View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
const heightBottomTab = Platform.OS === "ios" ? 74 : 70;
const checkIos = Platform.OS === "ios" ? true : false;
import { useRef, useState, useEffect } from "react";
import useColorScheme from "../hooks/useColorScheme";
import ManagerScreen from "../screens/TabBottom/ManagerScreen";
import HomeScreen from "../screens/TabBottom/HomeScreen";
import PersonalScreen from "../screens/TabBottom/PersonalScreen";

const BottomTab = createBottomTabNavigator<RootTabParamList>();
const screens: ITab[] = [
  {
    name: "Home",
    component: HomeScreen,
    options: {
      title: "Trang chủ",
      headerShown: false,
      tabBarIcon: ({ color, focused }) => (
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={[
              {
                color: focused
                  ? Colors.light.tabIconSelected
                  : Colors.white,
              },
              checkIos ? { fontSize: 10 } : null,
            ]}
          >
            ⬤
          </Text>
          <Entypo name="home" size={20} color={color} />
        </View>
      ),
    },
  },
  {
    name: "Manager",
    component: ManagerScreen,
    options: {
      title: "Quản Lý",
      headerShown: false,
      tabBarIcon: ({ color, focused }) => (
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={[
              {
                color: focused
                  ? Colors.light.tabIconSelected
                  : Colors.white,
              },
              checkIos ? { fontSize: 10 } : null,
            ]}
          >
            ⬤
          </Text>
          <MaterialCommunityIcons
            name="card-bulleted-settings-outline"
            size={20}
            color={color}
          />
        </View>
      ),
    },
  },
  {
    name: "Personal",
    component: PersonalScreen,
    options: {
      title: "Cá nhân",
      headerShown: false,

      tabBarIcon: ({ color, focused }) => (
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={[
              {
                color: focused
                  ? Colors.light.tabIconSelected
                  : Colors.white,
              },
              checkIos ? { fontSize: 10 } : null,
            ]}
          >
            ⬤
          </Text>
          <FontAwesome name="user" size={20} color={color} />
        </View>
      ),
    },
  },
];

export default function BottomTabNavigator({}: StackScreenProps<
  RootStackParamList,
  "Tab"
>) {
  const colorScheme = useColorScheme();
 
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarInactiveTintColor: "#E0E0E0",

        tabBarStyle: {
          height: heightBottomTab,
          position: "absolute",
          bottom: 14,
          paddingBottom: 0,
          borderRadius: 30,
          marginHorizontal: 8,
          backgroundColor: "#fff",
          elevation: 4,
          shadowColor: "#000",
          shadowOpacity: 0.45,
          shadowRadius: 2,
          shadowOffset: {
            width: 2,
            height: 2,
          },
        },

        tabBarLabelStyle: [
          { color: "#444444", fontSize: 12, height: 24 },
          checkIos ? null : { marginTop: 6 },
        ],
      }}
    >
      {screens.map((screen) => (
        <BottomTab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={() => ({
            ...screen.options,
          })}
        />
      ))}
    </BottomTab.Navigator>
  );
}
