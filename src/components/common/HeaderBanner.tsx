import { Layout } from '../../constant'
import React from 'react'
import { StyleSheet } from 'react-native'
import { CustomImageProps } from '../../types'
import Image from './Image'

export default function ({
  style,
  width = Layout.width,
  ...other
}: CustomImageProps & { width?: number }) {
  return (
    <Image
      background
      resizeMode="cover"
      style={[{ width, height: width * Layout.bannerHeightRatio }, style]}
      {...other}
    />
  )
}

const styles = StyleSheet.create({})
