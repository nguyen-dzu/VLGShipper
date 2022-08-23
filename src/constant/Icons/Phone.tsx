import Icon from '@expo/vector-icons/Feather'
import React from 'react'
import { OpaqueColorValue, StyleProp, TextStyle } from 'react-native'
import Colors from '../Colors'

function SvgComponent({
  color = Colors.gray2,
  style,
}: {
  color?: string | OpaqueColorValue
  style?: StyleProp<TextStyle>
}) {
  return <Icon name="phone" size={22} color={color} style={style} />
}

export default SvgComponent
