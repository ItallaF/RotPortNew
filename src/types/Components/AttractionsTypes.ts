import { ImageSourcePropType } from "react-native";
import { AppTabParamList } from "../../routes/types";

export type AttractionsTypes = {
  id: string;
  name: string;
  image: ImageSourcePropType;
  category?: string;
  route: keyof AppTabParamList;
};