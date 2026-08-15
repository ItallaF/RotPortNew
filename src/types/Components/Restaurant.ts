import { CardItemTypes } from "./CardItemTypes";

export interface Restaurant extends CardItemTypes {
  phone?: string;
  whatsapp?: string;
  address?: string;
}