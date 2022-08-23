import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

export default function ({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 5.25a1 1 0 011-1h18a1 1 0 011 1v13.5a1 1 0 01-1 1H3a1 1 0 01-1-1V5.25zm2 1v11.5h16V6.25H4z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.24 4.6a1 1 0 011.41-.11L12 11.648l8.35-7.156a1 1 0 011.3 1.518l-9 7.714a1 1 0 01-1.3 0l-9-7.714a1 1 0 01-.11-1.41z"
        fill={color}
      />
    </Svg>
  )
}
