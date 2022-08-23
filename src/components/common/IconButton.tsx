import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'

export default function (props: TouchableOpacityProps) {
  return <TouchableOpacity hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} {...props} />
}

const styles = StyleSheet.create({})
