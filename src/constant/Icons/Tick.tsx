import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import Colors from "../Colors";

function SvgComponent({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 10 10" fill="none" {...props}>
      <Path
        d="M5 1.5C3.067 1.5 1.5 3.067 1.5 5C1.5 6.933 3.067 8.5 5 8.5C6.933 8.5 8.5 6.933 8.5 5C8.5 3.067 6.933 1.5 5 1.5ZM4.4401 6.5572L2.9564 5.0735L3.4673 4.5626L4.4401 5.5354L6.5327 3.4428L7.0436 3.9537L4.4401 6.5572Z"
        fill={color}
      />
    </Svg>
  );
}

export default SvgComponent;
