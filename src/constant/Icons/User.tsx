import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

export default function ({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.8a4.612 4.612 0 100 9.224A4.612 4.612 0 0012 2.8zM9.588 7.412a2.412 2.412 0 114.824 0 2.412 2.412 0 01-4.824 0zm.178 5.64A6.966 6.966 0 002.8 20.017v.082a1.1 1.1 0 002.2 0v-.082a4.766 4.766 0 014.766-4.765h4.468A4.766 4.766 0 0119 20.017v.082a1.1 1.1 0 002.2 0v-.082a6.966 6.966 0 00-6.966-6.965H9.766z"
        fill={color}
      />
    </Svg>
  )
}
