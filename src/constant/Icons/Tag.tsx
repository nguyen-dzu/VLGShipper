import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.primary, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M0.59 9.58L9.59 0.58C9.95 0.22 10.45 0 11 0H18C19.1 0 20 0.9 20 2V9C20 9.55 19.78 10.05 19.41 10.42L10.41 19.42C10.05 19.78 9.55 20 9 20C8.45 20 7.95 19.78 7.59 19.41L0.59 12.41C0.219999 12.05 0 11.55 0 11C0 10.45 0.23 9.94 0.59 9.58ZM16.5 5C17.33 5 18 4.33 18 3.5C18 2.67 17.33 2 16.5 2C15.67 2 15 2.67 15 3.5C15 4.33 15.67 5 16.5 5Z"
        fill={color}
        stroke={color}
        strokeWidth={0.3}
      />
    </Svg>
  )
}

export default SvgComponent
