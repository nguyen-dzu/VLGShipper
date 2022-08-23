import { createNavigationContainerRef } from '@react-navigation/native'
import moment from 'moment'
import { RootStackParamList } from '../types'

const navigationRef = createNavigationContainerRef()

const navigate = (name: keyof RootStackParamList, params?: any) =>
  navigationRef.isReady() && navigationRef.navigate(name, params)

export default {

  navigationRef,
  navigate,
}
