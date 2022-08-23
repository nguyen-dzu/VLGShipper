import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M12 1.875a10.128 10.128 0 00-8.951 14.86l-.76 2.658a1.875 1.875 0 002.318 2.318l2.658-.76A10.126 10.126 0 1012 1.875zm0 18a7.864 7.864 0 01-4.018-1.1 1.124 1.124 0 00-.885-.116l-2.459.703.703-2.46a1.125 1.125 0 00-.115-.884A7.876 7.876 0 1112 19.875zm5.296-8.58l-3 3a1.125 1.125 0 01-1.591 0L10.5 12.091l-2.205 2.205a1.126 1.126 0 01-1.926-.794 1.125 1.125 0 01.336-.798l3-3a1.125 1.125 0 011.59 0L13.5 11.91l2.204-2.204a1.125 1.125 0 011.591 1.59z"
        fill={color}
      />
    </Svg>
  )
}

export default SvgComponent
