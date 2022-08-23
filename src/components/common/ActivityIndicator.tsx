import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Colors } from '../../constant';

export default function ({
  center,
  style,
  color = '#000',
  ...others
}: View['props'] & { center?: boolean; color?: string }) {
  return (
    <View
      style={[
        { alignSelf: 'center', paddingVertical: 5 },
        center && {
          flex: 1,
          justifyContent: 'center',
          backgroundColor: Colors.background,
          width: '100%',
        },
        style,
      ]}
      {...others}
    >
      <ActivityIndicator color={color} />
    </View>
  )
}
