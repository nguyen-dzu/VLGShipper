import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={11} height={18} fill="none" {...props}>
      <Path
        d="M6.777 13.51.937 8.996A2 2 0 0 1 .852 5.9L6.692.856C7.99-.263 10 .658 10 2.37v9.557c0 1.661-1.908 2.598-3.223 1.583Z"
        fill={color}
      />
    </Svg>
  )
}

export default SvgComponent
