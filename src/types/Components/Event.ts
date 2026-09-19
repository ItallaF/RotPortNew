import { CardItemTypes } from "./CardItemTypes";

export interface Event extends CardItemTypes {
  startDate?: string;
  endDate?: string;
}