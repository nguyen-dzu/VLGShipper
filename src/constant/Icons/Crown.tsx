import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

export default function ({ color = Colors.gray2, ...others }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...others}>
      <Path
        d="M12 2.25A2.261 2.261 0 009.75 4.5c0 .844.475 1.585 1.172 1.969l-2.204 4.406-3.446-2.46A2.25 2.25 0 006 6.75 2.261 2.261 0 003.75 4.5 2.261 2.261 0 001.5 6.75c0 1.011.695 1.852 1.617 2.133L4.5 16.5v3.75h15V16.5l1.383-7.617c.922-.281 1.617-1.122 1.617-2.133a2.262 2.262 0 00-2.25-2.25A2.262 2.262 0 0018 6.75c0 .653.275 1.251.727 1.664l-3.446 2.461-2.203-4.406A2.252 2.252 0 0014.25 4.5 2.261 2.261 0 0012 2.25zm0 1.5a.74.74 0 01.75.75.74.74 0 01-.75.75.74.74 0 01-.75-.75.74.74 0 01.75-.75zM3.75 6a.74.74 0 01.75.75.74.74 0 01-.75.75.74.74 0 01-.75-.75.74.74 0 01.75-.75zm16.5 0a.74.74 0 01.75.75.74.74 0 01-.75.75.74.74 0 01-.75-.75.74.74 0 01.75-.75zM12 7.688l2.32 4.64 1.125.282 3.75-2.672-1.055 5.812H5.86L4.805 9.937l3.75 2.673 1.125-.281L12 7.686zM6 17.25h12v1.5H6v-1.5z"
        fill={color}
      />
    </Svg>
  )
}
