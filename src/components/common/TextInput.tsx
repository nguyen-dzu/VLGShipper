import { Feather } from '@expo/vector-icons'
import { Colors, Style } from '../../constant'
import React, { useRef } from 'react'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import Text from './Text'

export default function ({
  label,
  error,
  touched,
  containerStyle,
  style,
  icon,
  extraData,
  extraData1,
  size = 'medium',
  ...others
}: TextInput['props'] & {
  label?: string
  error?: string
  touched?: boolean
  containerStyle?: View['props']['style']
  icon?: React.ComponentProps<typeof Feather>['name']
  extraData?: any
  extraData1?: any
  size?: 'medium' | 'small'
}) {
  const ref = useRef<TextInput>(null)

  const hasError = error && touched
  const success = touched && !hasError

  return (
    <View style={[Style.mb, containerStyle]}>
      {label ? <Text style={[Style.title, Style.mb]}>{label}</Text> : null}

      <Pressable
        style={[
          styles.input,
          size === 'small' && styles.inputSmall,
          success && styles.inputSuccess,
          hasError ? styles.inputError : null,
          others.multiline && { height: 90 },
          style,
        ]}
        onPress={() => ref.current?.focus()}
      >
        {icon && (
          <Feather
            name={icon}
            color={hasError ? Colors.error : success ? Colors.primary : Colors.gray2}
            size={21}
            style={{ marginRight: 15 }}
          />
        )}
        {extraData}
        <TextInput
          ref={ref}
          {...others}
          style={{
            fontSize: 14,
            color: Colors.gray2,
            flex: 1,
          }}
          returnKeyType={
            others.keyboardType === 'number-pad' || others.keyboardType === 'numeric'
              ? 'done'
              : 'default'
          }
          placeholderTextColor={Colors.gray3}
        />
        {extraData1}
      </Pressable>

      {hasError ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  input: {
    ...Style.borderRadius,
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    paddingHorizontal: 17,
    borderWidth: 1,
    borderColor: Colors.gray4,
    // backgroundColor: '#F8F8F8',
  },
  inputSmall: {
    height: 40,
  },
  inputSuccess: {
    borderColor: Colors.primary,
  },
  inputError: {
    borderColor: Colors.error,
  },
  error: {
    color: Colors.error,
    fontSize: 12,
    marginTop: 8,
    marginHorizontal: 8,
  },
})
