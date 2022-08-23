import { useFocusEffect } from '@react-navigation/native'
import React from 'react'
import { BackHandler, StyleSheet } from 'react-native'

export default function () {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true
      }

      BackHandler.addEventListener('hardwareBackPress', onBackPress)

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }, [])
  )
}

const styles = StyleSheet.create({})
