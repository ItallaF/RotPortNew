import Attractions from "./icon-attractions.svg";
import Hotel from "./icon-hotels.svg";
import Restaurant from "./icon-restaurant.svg";
import Events from "./icon-events.svg";
import Nature from "./icon-nature.svg";

export const Icons = {
  attractions: Attractions,
  hotel: Hotel,
  restaurant: Restaurant,
  events: Events,
  nature: Nature,
};

export type IconName = keyof typeof Icons;