import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import Colors from "../Colors";

function SvgComponent({ color = Colors.gray6, ...props }: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 10 10" fill="none">
      <Path
        d="M7.8125 4.0625C7.8125 6.5625 5 8.75 5 8.75C5 8.75 2.1875 6.5625 2.1875 4.0625C2.1875 2.5 3.4375 1.25 5 1.25C6.5625 1.25 7.8125 2.5 7.8125 4.0625Z"
        stroke= {color}
        stroke-miterlimit="10"
        stroke-linejoin="round"
      />
      <Path
        d="M5 5C5.51777 5 5.9375 4.58027 5.9375 4.0625C5.9375 3.54473 5.51777 3.125 5 3.125C4.48223 3.125 4.0625 3.54473 4.0625 4.0625C4.0625 4.58027 4.48223 5 5 5Z"
        stroke= {color}
        stroke-miterlimit="10"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
