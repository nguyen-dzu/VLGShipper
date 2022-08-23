import { Colors } from '../../constant'
import React from 'react'
import { StyleSheet, TextStyle, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import Text from './Text'

export default function ({
  style,
  textStyle,
  children,
  ...others
}: TouchableOpacityProps & { textStyle?: TextStyle }) {
  return (
    <TouchableOpacity style={[{ padding: 5, alignSelf: 'flex-start' }, style]} {...others}>
      <Text style={[{ color: Colors.tertiary }, textStyle]}>{children}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({})
