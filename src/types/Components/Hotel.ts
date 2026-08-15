import { CardItemTypes } from "./CardItemTypes";

export interface Hotel extends CardItemTypes {
  phone?: string;
  whatsapp?: string;
  address?: string;
}