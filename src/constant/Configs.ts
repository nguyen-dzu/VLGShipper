import { RouteProp } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import Layout from '../constant/Layout'
import { Platform } from 'react-native'

const screenOptionsDefaut:
  | StackNavigationOptions
  | ((props: { route: RouteProp<any, string>; navigation: any }) => StackNavigationOptions) = {
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  gestureResponseDistance: Platform.OS === 'ios' ? Layout.width : 0,
}

export default {
  screenOptionsDefaut,
}
