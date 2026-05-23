import Attractions from "./icon-attractions.svg";
import Hotel from "./icon-hotels.svg";
import Restaurant from "./icon-restaurant.svg";
import Events from "./icon-events.svg";
import Nature from "./icon-nature.svg";
import Back from "./icon-back.svg";
import User from "./icon-user.svg";

export const Icons = {
  attractions: Attractions,
  hotel: Hotel,
  restaurant: Restaurant,
  events: Events,
  nature: Nature,
  back: Back,
  user: User
};

export type IconName = keyof typeof Icons;