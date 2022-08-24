import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { RouteProp } from '@react-navigation/native'
import {
  StackNavigationOptions,
  StackNavigationProp,
  StackScreenProps as RNStackScreenProps,
} from '@react-navigation/stack'

import { ImageProps, ImageSourcePropType, TextStyle, TouchableOpacity } from 'react-native'
import { INewOrder } from './api/apiInterfaces'
export const BASE_URL = 'http://192.168.1.17:8500'

export type StorageParamList = {
  token: undefined
}

export type AuthStackParamList = {
  Login: undefined
  SignUp: undefined
}

export type INavigation = StackNavigationProp<StackParamList, any>

export type RootStackParamList = BottomTabParamList & {
  Tab: undefined;
  HistoryOrder: {item: INewOrder};
  DetailOrder: {item: INewOrder}
}

export type StackParamList = AuthStackParamList & RootStackParamList & BottomTabParamList
export interface StackScreenProps {
  component: React.FC<any>
  options?:
    | StackNavigationOptions
    | ((props: {
        route: RouteProp<any, keyof RootStackParamList>
        navigation: any
      }) => StackNavigationOptions)
}
export interface ITab {
  name: keyof RootTabParamList;
  component: any;
  options?: BottomTabNavigationOptions;
  iconNoti?: any;
}
export type RootTabParamList = {
  Home: undefined;
  Manager: undefined;
  Personal: undefined;
};

export type BottomTabParamList = {
  Home: undefined
  Manager: undefined
  Personal: undefined
}
export interface BottomTabProps {
  name: keyof BottomTabParamList
  title?: string
  component: React.FC<any>
  options?: BottomTabNavigationOptions
}

export type CustomImageProps = ImageProps & { background?: boolean }

export type IState = 'loading' | 'error' | 'success'


export type IService = {
  id: string
  label: string
  icon: ImageSourcePropType
}

export type CustomButtonProps = TouchableOpacity['props'] & {
  loading?: boolean
  size?: 'small' | 'medium'
  variant?: 'contained' | 'outlined'
  fullWidth?: boolean
  textStyle?: TextStyle
}

export type AuthStackScreenProps<T extends keyof AuthStackParamList> = RNStackScreenProps<
  AuthStackParamList,
  T
>

export type RootStackScreenProps<T extends keyof (RootStackParamList & BottomTabParamList)> =
  RNStackScreenProps<RootStackParamList & BottomTabParamList, T>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}


