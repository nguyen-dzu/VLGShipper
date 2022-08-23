import { useFocusEffect } from '@react-navigation/native'
import React from 'react'
import { Alert, BackHandler, StyleSheet } from 'react-native'

export default function () {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert('Xác nhận thoát ứng dụng?', '', [
          {
            text: 'Có',
            onPress: () => BackHandler.exitApp(),
            style: 'cancel',
          },
          { text: 'Không' },
        ])
        return true
      }

      BackHandler.addEventListener('hardwareBackPress', onBackPress)

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }, [])
  )
}

const styles = StyleSheet.create({})
