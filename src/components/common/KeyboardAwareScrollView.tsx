import React from 'react'
import { StyleSheet } from 'react-native'
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view'

export default function (props: KeyboardAwareScrollViewProps) {
  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" extraHeight={200} {...props} />
  )
}

const styles = StyleSheet.create({})
