import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

export default function ({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M17 10.38V19H5V7h8.62a4.509 4.509 0 01-.12-1c0-.345.047-.678.12-1H5c-1.102 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.62c-.322.073-.655.12-1 .12s-.678-.047-1-.12zM18 3a3 3 0 100 6 3 3 0 000-6z"
        fill={color}
      />
    </Svg>
  )
}
