import { ROUTES } from "../../routes/routesNames";
import { CategoryTypes } from "../../types/Components/CategoryTypes";


export const categories: CategoryTypes[] = [
  {
    id: 1,
    name: "Atrações",
    icon: "attractions",
    route: ROUTES.ATTRACTIONS,
  },
  {
    id: 2,
    name: "Hotéis",
    icon: "hotel",
    route: ROUTES.HOTELS,
  },
  {
    id: 3,
    name: "Restaurantes",
    icon: "restaurant",
    route: ROUTES.RESTAURANTS,
  },
  {
    id: 4,
    name: "Eventos",
    icon: "events",
    route: ROUTES.EVENTS,
  },
];