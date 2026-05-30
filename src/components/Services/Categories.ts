
import { STACK_ROUTES } from "../../routes/stackRoutes";
import { CategoryTypes } from "../../types/Components/CategoryTypes";


export const categories: CategoryTypes[] = [
  {
    id: 1,
    name: "Atrações",
    icon: "attractions",
    route: STACK_ROUTES.ATTRACTIONS as CategoryTypes["route"],
  },
  {
    id: 2,
    name: "Hotéis",
    icon: "hotel",
    route: STACK_ROUTES.HOTELS as CategoryTypes["route"],
  },
  {
    id: 3,
    name: "Restaurantes",
    icon: "restaurant",
    route: STACK_ROUTES.RESTAURANTS as CategoryTypes["route"],
  },
  {
    id: 4,
    name: "Eventos",
    icon: "events",
    route: STACK_ROUTES.EVENTS as CategoryTypes["route"],
  },
];