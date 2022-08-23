import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M9.6 3.6a1.2 1.2 0 00-1.2 1.2v.6a.6.6 0 01-1.2 0v-.6a2.4 2.4 0 012.4-2.4h.6a.6.6 0 010 1.2h-.6zM8.4 14.4a1.2 1.2 0 001.2 1.2h.6a.6.6 0 010 1.2h-.6a2.4 2.4 0 01-2.4-2.4v-.6a.6.6 0 011.2 0v.6zM8.4 7.8a.6.6 0 00-1.2 0v3.6a.6.6 0 001.2 0V7.8zM19.2 3.6a1.2 1.2 0 011.2 1.2v.6a.6.6 0 101.2 0v-.6a2.4 2.4 0 00-2.4-2.4h-.6a.6.6 0 000 1.2h.6zM19.2 15.6a1.2 1.2 0 001.2-1.2v-.6a.6.6 0 011.2 0v.6a2.4 2.4 0 01-2.4 2.4h-.6a.6.6 0 010-1.2h.6zM21 7.2a.6.6 0 00-.6.6v3.6a.6.6 0 001.2 0V7.8a.6.6 0 00-.6-.6zM12.6 2.4a.6.6 0 000 1.2h3.6a.6.6 0 000-1.2h-3.6zM12 16.2a.6.6 0 01.6-.6h3.6a.6.6 0 010 1.2h-3.6a.6.6 0 01-.6-.6z"
        fill={color}
      />
      <Path
        d="M4.8 7.2H6v1.2H4.8a1.2 1.2 0 00-1.2 1.2v7.8a3 3 0 003 3h7.8a1.2 1.2 0 001.2-1.2V18h1.2v1.2a2.4 2.4 0 01-2.4 2.4H6.6a4.2 4.2 0 01-4.2-4.2V9.6a2.4 2.4 0 012.4-2.4z"
        fill={color}
      />
    </Svg>
  )
}

export default SvgComponent
