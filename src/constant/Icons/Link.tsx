import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M15.912 8.089a.79.79 0 010 1.117L9.208 15.91a.79.79 0 11-1.118-1.117l6.705-6.704a.79.79 0 011.117 0zm-2.794 8.38l-2.793 2.794a3.952 3.952 0 01-5.587-5.587l2.793-2.793a.79.79 0 10-1.117-1.117L3.62 12.559a5.53 5.53 0 107.822 7.821l2.794-2.793a.79.79 0 10-1.118-1.117zm7.265-12.85a5.532 5.532 0 00-7.823 0L9.767 6.414a.79.79 0 101.117 1.117l2.794-2.793a3.951 3.951 0 015.587 5.586l-2.794 2.794a.79.79 0 101.118 1.117l2.794-2.793a5.537 5.537 0 000-7.821z"
        fill={color}
      />
    </Svg>
  )
}

export default SvgComponent
