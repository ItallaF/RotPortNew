import { CardItemTypes } from "./CardItemTypes";

export interface Attraction extends CardItemTypes {
  latitude?: number;
  longitude?: number;
  trail?: string;
}