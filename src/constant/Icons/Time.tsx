import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M11.991 3C7.023 3 3 7.032 3 12s4.023 9 8.991 9C16.968 21 21 16.968 21 12s-4.032-9-9.009-9zM12 19.2A7.198 7.198 0 014.8 12c0-3.978 3.222-7.2 7.2-7.2s7.2 3.222 7.2 7.2-3.222 7.2-7.2 7.2z"
        fill={color}
      />
      <Path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" fill={color} />
    </Svg>
  )
}

export default SvgComponent
