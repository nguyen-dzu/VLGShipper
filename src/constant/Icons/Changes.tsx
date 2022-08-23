import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M4.8 12c0-2.108.918-3.998 2.358-5.319L9.3 8.834V3.407H3.9l1.98 1.99A9.005 9.005 0 003 12c0 4.695 3.555 8.548 8.1 9v-1.827C7.554 18.73 4.8 15.68 4.8 12zM21 12c0-4.694-3.555-8.548-8.1-9v1.827c3.546.443 6.3 3.492 6.3 7.173 0 2.107-.918 3.998-2.358 5.319L14.7 15.166v5.427h5.4l-1.98-1.99A9.005 9.005 0 0021 12z"
        fill={color}
      />
    </Svg>
  )
}

export default SvgComponent
