import React from 'react';
import { Icons, IconName } from "../../assets/Icons";

type Props = {
  name: IconName;
  size?: number;
  color?: string;
};

export function AppIcon({ name, size = 24, color }: Props) {
  const IconComponent = Icons[name];

  return (
    <IconComponent
      width={size}
      height={size}
      fill={color}
      stroke={color}
    />
  );
}