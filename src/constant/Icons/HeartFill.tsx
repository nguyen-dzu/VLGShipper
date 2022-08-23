import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import Colors from "../Colors";

function SvgComponent({ color = Colors.gray2, ...props }: SvgProps) {
  return (
    <Svg width={13} height={13} viewBox="0 0 4 4" fill="none" {...props}>
      <Path
        d="M1.16518 0.500269C0.909268 0.500269 0.652118 0.583594 0.456851 0.783594C0.0663348 1.18359 0.0770515 1.80026 0.456851 2.20026L1.99852 3.8336L3.54018 2.20026C3.92002 1.80026 3.93068 1.18359 3.54018 0.783594C3.14968 0.40026 2.51402 0.40026 2.12352 0.783594L1.99852 0.916935L1.87352 0.783594C1.67818 0.583594 1.4211 0.500269 1.16518 0.500269Z"
        fill={color}
      />
    </Svg>
  );
}

export default SvgComponent;
