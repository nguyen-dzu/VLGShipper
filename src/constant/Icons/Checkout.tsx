import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.333 5.25a.425.425 0 0 1 .417.417V19c0 .235-.19.425-.425.425H3.667A.425.425 0 0 1 3.25 19V5.667a.425.425 0 0 1 .417-.417h16.666Zm0-1.25H3.667C2.747 4 2 4.746 2 5.667V19c0 .92.746 1.667 1.667 1.667h16.666c.92 0 1.667-.747 1.667-1.667V5.667C22 4.747 21.254 4 20.333 4Z"
        fill={color}
      />
      <Path
        d="M2.967 8.158h17.925M2.992 11.5h17.925M6.167 16.5h5M16.167 16.5h1.666"
        stroke={color}
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
