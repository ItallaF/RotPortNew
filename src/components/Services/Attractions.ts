import { ROUTES } from "../../routes/routesNames";
import { AttractionsTypes } from "../../types/Components/AttractionsTypes";

export const attractions: AttractionsTypes[] = [
  {
    id: 1,
    name: "Cachoeira do Serrado",
    img: "Cachoeira",
    route: ROUTES.HOME,
  },
  {
    id: 2,
    name: "Praça Cel. Odion Coelho",
    img: "Praça",
    route: ROUTES.HOME,
  },
  {
    id: 3,
    name: "Mercado Municipal",
    img: "Mercado",
    route: ROUTES.HOME,
  },
  {
    id: 4,
    name: "Parque Estadual Serra Nova e Talhado",
    img: "Parque",
    route: ROUTES.HOME,
  },
  {
    id: 5,
    name: "Igreja São José do Gorutuba",
    img: "Igreja",
    route: ROUTES.HOME,
  },
];