import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
import Colors from '../Colors'

function SvgComponent({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.4 2a.9.9 0 01.9.9v1.8h5.4V2.9a.9.9 0 111.8 0v1.8h.06c.797 0 1.485 0 2.035.074.59.08 1.155.258 1.614.717.459.459.638 1.024.717 1.614.074.55.074 1.238.074 2.036v6.418c0 .798 0 1.486-.074 2.036-.08.59-.258 1.155-.717 1.614-.459.459-1.024.638-1.614.717-.55.074-1.238.074-2.036.074H7.441c-.798 0-1.486 0-2.036-.074-.59-.08-1.155-.258-1.614-.717-.459-.459-.638-1.024-.717-1.614C3 17.045 3 16.357 3 15.559V9.14c0-.797 0-1.485.074-2.035.08-.59.258-1.155.717-1.614.459-.459 1.024-.638 1.614-.717.55-.074 1.238-.074 2.036-.074H7.5V2.9a.9.9 0 01.9-.9zm6.3 4.5H9.3a.9.9 0 01-1.8 0c-.874 0-1.439.002-1.855.058-.39.052-.513.137-.581.206-.069.068-.154.19-.206.58-.056.417-.058.982-.058 1.856h14.4c0-.874-.002-1.439-.058-1.855-.052-.39-.137-.513-.206-.581-.068-.069-.19-.154-.58-.206-.417-.056-.982-.058-1.856-.058a.9.9 0 01-1.8 0zm-9.9 9V11h14.4v4.5c0 .874-.002 1.439-.058 1.855-.052.39-.137.513-.206.581-.068.069-.19.154-.58.206-.417.056-.982.058-1.856.058h-9c-.874 0-1.439-.002-1.855-.058-.39-.052-.513-.137-.581-.206-.069-.068-.154-.19-.206-.58-.056-.417-.058-.982-.058-1.856zm4.5-1.8a.9.9 0 100 1.8h5.4a.9.9 0 000-1.8H9.3z"
        fill={color}
      />
    </Svg>
  )
}

export default SvgComponent