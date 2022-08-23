import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path d="M16.2 15.6a.6.6 0 000 1.2h2.4a.6.6 0 000-1.2h-2.4z" fill={color} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.493 15.493a1 1 0 01.707-.293h2.4a1 1 0 110 2h-2.4a1 1 0 01-.707-1.707zm.283.283a.6.6 0 01.424-.176h2.4a.6.6 0 010 1.2h-2.4a.6.6 0 01-.424-1.024z"
        fill={color}
      />
      <Path
        d="M2.4 7.8a3 3 0 013-3h13.2a3 3 0 013 3v8.4a3 3 0 01-3 3H5.4a3 3 0 01-3-3V7.8zm1.2 8.4A1.8 1.8 0 005.4 18h13.2a1.8 1.8 0 001.8-1.8v-5.4H3.6v5.4zm16.8-8.4A1.8 1.8 0 0018.6 6H5.4a1.8 1.8 0 00-1.8 1.8v1.8h16.8V7.8z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7.8a3.4 3.4 0 013.4-3.4h13.2A3.4 3.4 0 0122 7.8v8.4a3.4 3.4 0 01-3.4 3.4H5.4A3.4 3.4 0 012 16.2V7.8zm2 8.4a1.4 1.4 0 001.4 1.4h13.2a1.4 1.4 0 001.4-1.4v-5H4v5zm-.4 0A1.8 1.8 0 005.4 18h13.2a1.8 1.8 0 001.8-1.8v-5.4H3.6v5.4zM20 7.8a1.4 1.4 0 00-1.4-1.4H5.4A1.4 1.4 0 004 7.8v1.4h16V7.8zm.4 0A1.8 1.8 0 0018.6 6H5.4a1.8 1.8 0 00-1.8 1.8v1.8h16.8V7.8zM3.279 5.679a3 3 0 00-.879 2.12v8.4a3 3 0 003 3h13.2a3 3 0 003-3V7.8a3 3 0 00-3-3H5.4a3 3 0 00-2.121.88z"
        fill={color}
      />
    </Svg>
  )
}

export default SvgComponent
