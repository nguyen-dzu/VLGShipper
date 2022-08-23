import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import { Colors, Layout } from '../../constant'
import React from 'react'
import { StyleSheet, TouchableOpacityProps } from 'react-native'
import IconButton from './IconButton'

export default function ({
  color = '#7A7A7A',
  style,
  ...others
}: TouchableOpacityProps & { color?: string }) {
  const naivagation = useNavigation()

  return (
    <IconButton
      style={[
        {
          marginTop: 20,
          backgroundColor: Colors.gray4,
          width: 30,
          height: 30,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          zIndex: 1,
          left: 10,
          top: Layout.statusBarHeight / 2,
        },
        style,
      ]}
      {...others}
      onPress={() => naivagation.goBack()}
    >
      <Ionicons name="chevron-back" size={28} color={color} />
    </IconButton>
  )
}

const styles = StyleSheet.create({})
