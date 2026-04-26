import { AppTabParamList } from "../../routes/types";

export type AttractionsTypes = {
  id: number;
  name: string;
  img: string;
  route: keyof AppTabParamList;
};