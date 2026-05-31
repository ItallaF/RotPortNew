import React from "react";
import { SvgProps } from "react-native-svg";


type Props = {
  icon: React.FC<SvgProps>;
  color: string;
  focused: boolean;
};

export function AppTabIcon({
  icon: Icon,
  color,
  focused,
}: Props) {
  return (
    <Icon
      width={22}
      height={22}
      color={color}
      opacity={focused ? 1 : 0.5}
    />
  );
}
