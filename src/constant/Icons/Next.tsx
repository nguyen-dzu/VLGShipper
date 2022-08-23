import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={11} height={18} fill="none" {...props}>
      <Path
        d="m3.223 13.51 5.84-4.514A2 2 0 0 0 9.148 5.9L3.308.856C2.01-.263 0 .658 0 2.37v9.557c0 1.661 1.908 2.598 3.223 1.583Z"
        fill={color}
      />
    </Svg>
  )
}

export default SvgComponent
