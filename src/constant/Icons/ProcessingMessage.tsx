import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.primary, ...props }: SvgProps) {
  return (
    <Svg width={20} height={20} fill="none" {...props}>
      <Path
        d="M10 0C4.5 0 0 3.58 0 8C0 12.42 4.5 16 10 16C11.24 16 12.43 15.82 13.53 15.5C16.45 18 20 18 20 18C17.67 15.67 17.3 14.1 17.25 13.5C18.95 12.07 20 10.13 20 8C20 3.58 15.5 0 10 0ZM5 9V7H7V9H5ZM9 9V7H11V9H9ZM13 9V7H15V9H13Z"
        fill={color}
        stroke={color}
        strokeWidth={0.3}
      />
    </Svg>
  )
}

export default SvgComponent
