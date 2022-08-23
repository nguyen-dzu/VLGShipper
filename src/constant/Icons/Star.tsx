import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M11.988 4.463l2.213 4.483 4.95.72-3.581 3.492.846 4.929-4.428-2.328-4.427 2.325.846-4.928-3.581-3.49 4.95-.72 2.212-4.483z"
        fill="transparent"
        fillOpacity={0.15}
      />
      <Path
        d="M2.705 8.269l5.95-.865 2.66-5.393a.753.753 0 011.345 0l2.661 5.393 5.95.865a.748.748 0 01.416 1.28l-4.306 4.197 1.017 5.927a.75.75 0 01-1.087.79l-5.323-2.798-5.322 2.798a.749.749 0 01-1.087-.79l1.016-5.927L2.29 9.548a.749.749 0 01-.218-.428.747.747 0 01.633-.851zm5.702 4.886l-.846 4.93 4.427-2.326 4.428 2.328-.847-4.93 3.582-3.491-4.95-.72-2.213-4.483-2.212 4.483-4.95.72 3.581 3.49z"
        fill={color}
      />
    </Svg>
  )
}

export default SvgComponent
