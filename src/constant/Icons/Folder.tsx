import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

export default function ({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M2 7v10a3.333 3.333 0 003.333 3.333h13.334A3.333 3.333 0 0022 17V8.667a3.333 3.333 0 00-3.333-3.334h-8.042L8.771 3.85a.833.833 0 00-.521-.183H5.333A3.333 3.333 0 002 7zm1.667 0a1.667 1.667 0 011.666-1.667h2.625l1.447 1.158-1.477 1.342H3.667V7zm7.655 0h7.345a1.667 1.667 0 011.666 1.667V17a1.667 1.667 0 01-1.666 1.667H5.333A1.666 1.666 0 013.667 17V9.5H8.25a.833.833 0 00.56-.217L11.323 7z"
        fill={color}
      />
    </Svg>
  )
}
