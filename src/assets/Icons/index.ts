import Attractions from "./icon-attractions.svg";
import Hotel from "./icon-hotels.svg";
import Restaurant from "./icon-restaurant.svg";
import Events from "./icon-events.svg";
import Nature from "./icon-nature.svg";
import Back from "./icon-back.svg";
import User from "./icon-user.svg";
import Cell from "./icon-cell.svg";
import Favorite from "./icon-favorite.svg";
import Map from "./icon-map.svg";
import Share from "./icon-share.svg";
import Whatsapp from "./icon-whatsapp.svg";
import Home from "./icon-home.svg";


export const Icons = {
  attractions: Attractions,
  hotel: Hotel,
  restaurant: Restaurant,
  events: Events,
  nature: Nature,
  back: Back,
  user: User,
  cell: Cell,
  favorite: Favorite,
  map: Map,
  share: Share,
  whatsapp: Whatsapp,
  home: Home
};

export type IconName = keyof typeof Icons;