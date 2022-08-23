import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 1a2 2 0 00-2 2H6a3 3 0 00-3 3v14a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3h-1a2 2 0 00-2-2H9zm8 4a2 2 0 01-2 2H9a2 2 0 01-2-2H6a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1h-1zM9 4v1h6V3H9v1zm2 7a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm1 4a1 1 0 100 2h4a1 1 0 100-2h-4zm-5-4a1 1 0 011-1h.01a1 1 0 110 2H8a1 1 0 01-1-1zm1 4a1 1 0 100 2h.01a1 1 0 100-2H8z"
        fill={color}
      />
    </Svg>
  )
}

export default SvgComponent
