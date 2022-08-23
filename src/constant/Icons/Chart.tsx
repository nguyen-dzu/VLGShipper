import React from 'react'
import Svg, { Path, Rect, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M17 9l-3.044 4.566a1 1 0 01-1.727-.107l-.458-.918a1 1 0 00-1.727-.107L7 17"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect x={3} y={3} width={18} height={18} rx={2} stroke={color} strokeWidth={2} />
    </Svg>
  )
}

export default SvgComponent
