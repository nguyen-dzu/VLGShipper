import { Colors, Icons, Style } from '../../constant'
import React from 'react'
import { StyleSheet, TouchableOpacityProps, View } from 'react-native'
import IconButton from './IconButton'
import Text from './Text'

export default function ({
  title,
  value,
  onChange,
  style,
}: {
  title?: string
  value: boolean
  onChange: (value: boolean) => void
  style?: TouchableOpacityProps['style']
}) {
  return (
    <IconButton style={[styles.container, style]} onPress={() => onChange(!value)}>
      <View
        style={[
          styles.circle,
          {
            backgroundColor: value ? Colors.success : Colors.gray4,
            borderWidth: 1,
            borderColor: Colors.success,
          },
        ]}
      >
        {value && <Icons.Check color={Colors.background} />}
      </View>
      {title ? <Text style={{ color: Colors.black, ...Style.ms }}>{title}</Text> : null}
    </IconButton>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  circleInner: {
    width: 14,
    height: 14,
    borderRadius: 999,
    backgroundColor: Colors.primary,
  },
})
