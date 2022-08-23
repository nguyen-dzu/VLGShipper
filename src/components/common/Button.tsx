import { Colors, Style } from '../../constant'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { CustomButtonProps } from '../../types'
import ActivityIndicator from './ActivityIndicator'
import Text from './Text'

export default function ({
  style,
  children,
  disabled,
  loading = false,
  size = 'medium',
  variant = 'contained',
  fullWidth = true,
  textStyle,
  ...others
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        !fullWidth && { alignSelf: 'flex-start' },
        size === 'medium' ? styles.containerMedium : styles.containerSmall,
        variant === 'contained' ? styles.containerContained : styles.containerOutlined,
        disabled && { opacity: 0.4 },
        style,
      ]}
      disabled={disabled || loading}
      {...others}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Text
          style={[
            styles.text,
            variant === 'contained' ? styles.textContained : styles.textOutlined,
            loading && { opacity: 0 },
            textStyle,
          ]}
        >
          {children}
        </Text>
      </View>
      {loading && <ActivityIndicator color={Colors.white} style={{ position: 'absolute' }} />}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    ...Style.borderRadius1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    // minWidth: 100,
  },
  containerMedium: {
    height: 56,
  },
  containerSmall: {
    height: 40,
  },
  containerContained: {
    backgroundColor: Colors.dark.mainColor,
  },
  containerOutlined: {
    backgroundColor: Colors.background,
    borderWidth: 2,
    borderColor: Colors.dark.mainColor,
  },

  text: {
    textAlign: 'center',
  },
  textContained: {
    color: Colors.white,
  },
  textOutlined: {
    color: Colors.dark.mainColor,
  },
})
