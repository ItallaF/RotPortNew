import { ROUTES } from "../../routes/routesNames";
import { AttractionsTypes } from "../../types/Components/AttractionsTypes";

export const attractions: AttractionsTypes[] = [
  {
    id: '1',
    name: "Cachoeira do Serrado",
    image: require("../../assets/img/waterfall.jpg"),
    category: "Natureza",
    route: ROUTES.HOME,
  },
  {
    id: '2',
    name: "Praça Cel. Odion Coelho",
    image: require("../../assets/img/waterfall.jpg"),
    category: "Parque",
    route: ROUTES.HOME,
  },
  {
    id: '3',
    name: "Mercado Municipal",
    image: require("../../assets/img/waterfall.jpg"),
    category: "Comércio",
    route: ROUTES.HOME,
  },
  {
    id: '4',
    name: "Parque Estadual Serra Nova e Talhado",
    image: require("../../assets/img/waterfall.jpg"),
    category: "Natureza",
    route: ROUTES.HOME,
  },
  {
    id: '5',
    name: "Igreja São José do Gorutuba",
    image: require("../../assets/img/waterfall.jpg"),
    category: "Religião",
    route: ROUTES.HOME,
  },
];