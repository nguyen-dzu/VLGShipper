import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M12 6.444a.833.833 0 01.833.834v3.889h3.89a.834.834 0 010 1.666h-3.89v3.89a.833.833 0 01-1.666 0v-3.89h-3.89a.833.833 0 110-1.666h3.89v-3.89A.834.834 0 0112 6.445z"
        fill={color}
      />
      <Path
        d="M2 5.611A3.611 3.611 0 015.611 2H18.39A3.611 3.611 0 0122 5.611V18.39A3.611 3.611 0 0118.389 22H5.61A3.611 3.611 0 012 18.389V5.61zm3.611-1.944A1.944 1.944 0 003.667 5.61V18.39c0 1.073.87 1.944 1.944 1.944H18.39a1.944 1.944 0 001.944-1.944V5.61a1.944 1.944 0 00-1.944-1.944H5.61z"
        fill={color}
      />
    </Svg>
  )
}

export default SvgComponent
