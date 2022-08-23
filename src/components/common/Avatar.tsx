import React from 'react'
import { StyleSheet } from 'react-native'
import { CustomImageProps } from '../../types'
import Image from './Image'

export default function ({
  style,
  size = 'medium',
  ...others
}: CustomImageProps & { size?: 'medium' | 'small' }) {
  return (
    <Image
      style={[size === 'medium' ? styles.medium : styles.small, style]}
      borderRadius={1000}
      resizeMode="cover"
      {...others}
    />
  )
}

const styles = StyleSheet.create({
  medium: {
    height: 120,
    width: 120,
  },
  small: {
    height: 68,
    width: 68,
  },
})
