import { Icons } from "../../../assets/Icons";
import { ActionKey } from "./actionConfig";
import { SvgProps } from "react-native-svg";

export const ACTION_ICONS:  Record<ActionKey, React.FC<SvgProps>> = {
  map: Icons.map,
  call: Icons.cell,
  whatsapp: Icons.whatsapp,
  share: Icons.share,
  favorite: Icons.favorite,
};