import { IconName } from "../../assets/Icons";
import { AppTabParamList } from "../../routes/types";

export type Category = {
  id: number;
  name: string;
  icon: IconName;
  route: keyof AppTabParamList;
};