import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { CustomImageProps } from '../../types'

export default function ({ background = false, style, ...others }: CustomImageProps) {
  return <Image style={[background && { backgroundColor: '#C4C4C4' }, style]} {...others} />
}

const styles = StyleSheet.create({})
