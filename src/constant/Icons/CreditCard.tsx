import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M0 3a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v7.5H0V3Zm17.25 1.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 .75.75h3a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-3ZM0 13.5V15a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-1.5H0Z"
        fill={color}
      />
    </Svg>
  )
}

export default SvgComponent
