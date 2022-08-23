import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M12 3a9 9 0 1 1-8.963 8.183 1 1 0 1 1 1.992.18 6.962 6.962 0 0 0 2.02 5.587A7.004 7.004 0 0 0 12.01 19 7 7 0 1 0 7.097 7.002h1.4a1 1 0 0 1 .116 1.995l-.116.006H4.496a1 1 0 0 1-.993-.883l-.007-.117v-4a1 1 0 0 1 1.994-.116l.006.117v1.774A8.983 8.983 0 0 1 12 3Zm-.75 4a.75.75 0 0 1 .743.648L12 7.75V12h2.25a.75.75 0 0 1 .102 1.493l-.102.007h-3a.75.75 0 0 1-.743-.648l-.007-.102v-5a.75.75 0 0 1 .75-.75Z"
        fill={color}
      />
    </Svg>
  )
}

export default SvgComponent
