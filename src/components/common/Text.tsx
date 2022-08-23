import { Style } from '../../constant'
import React from 'react'
import { Text } from 'react-native'

export default function ({ style, ...others }: Text['props']) {
  return <Text style={[Style.textDefault, style]} {...others} />
}
