import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

export default function ({ color = Colors.gray2, ...others }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...others}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.77 8.733c-.5 0-.97.418-.97 1.011v7.512c0 .593.47 1.01.97 1.01h12.46c.5 0 .97-.417.97-1.01V9.744a.991.991 0 00-.97-1.01H5.77zM3 9.744A2.756 2.756 0 015.77 7h12.46A2.756 2.756 0 0121 9.744v7.512A2.756 2.756 0 0118.23 20H5.77A2.756 2.756 0 013 17.256V9.744z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.639 4.044a3.06 3.06 0 011.212.036c.4.094.775.268 1.098.512.324.244.588.554.771.909.184.355.28.745.28 1.141v1.072h-1.778V6.643a.825.825 0 00-.093-.379.954.954 0 00-.276-.322 1.129 1.129 0 00-.422-.196 1.219 1.219 0 00-.486-.014l-.016.003L5.63 7.339a1.103 1.103 0 00-.623.336.854.854 0 00-.23.574V10H3V8.25c0-.628.24-1.23.668-1.703a2.898 2.898 0 011.654-.896l.016-.003 10.3-1.604z"
        fill={color}
      />
      <Path d="M16.5 15a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill={color} />
    </Svg>
  )
}
