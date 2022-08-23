import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.934 4.698a2.777 2.777 0 011.964-.813h6.22a1 1 0 110 2h-6.22a.777.777 0 00-.777.777v12.44a.777.777 0 00.777.777h12.44a.777.777 0 00.777-.777v-6.22a1 1 0 112 0v6.22a2.777 2.777 0 01-2.777 2.777H4.898a2.777 2.777 0 01-2.777-2.777V6.662c0-.736.293-1.443.813-1.964z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.115 4a.885.885 0 00-.626.26l-8.245 8.245-.417 1.668 1.668-.417 8.245-8.245A.885.885 0 0019.115 4zm-2.04-1.155a2.885 2.885 0 114.08 4.08l-8.442 8.441a1 1 0 01-.464.263l-3.554.889a1 1 0 01-1.213-1.213l.889-3.554a1 1 0 01.263-.465l8.44-8.44z"
        fill={color}
      />
    </Svg>
  )
}

export default SvgComponent
