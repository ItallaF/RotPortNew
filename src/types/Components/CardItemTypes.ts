import { ImageSourcePropType } from "react-native";

export type CardItemTypes = {
  id: string;
  name: string;
  image: ImageSourcePropType;
  category?: string;
};
