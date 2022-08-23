import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.secondary, ...props }: SvgProps) {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11ZM11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM11 5C10.4477 5 10 5.44772 10 6C10 6.55228 10.4477 7 11 7H11.01C11.5623 7 12.01 6.55228 12.01 6C12.01 5.44772 11.5623 5 11.01 5H11ZM8 10C8 9.44771 8.44771 9 9 9H11C11.5523 9 12 9.44771 12 10V14H13C13.5523 14 14 14.4477 14 15C14 15.5523 13.5523 16 13 16H11H9C8.44771 16 8 15.5523 8 15C8 14.4477 8.44771 14 9 14H10V11H9C8.44771 11 8 10.5523 8 10Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  )
}

export default SvgComponent
