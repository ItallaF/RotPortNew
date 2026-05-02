import React from "react";
import { useNavigation } from "@react-navigation/native";
import CardItens from "../../Card/CardItem";
import { RestaurantsNavigationProp } from "../../../routes/types";
import { restaurants } from "../../Services/Restaurants";


export default function CardRestaurants() {
  const navigation = useNavigation<RestaurantsNavigationProp>();

  return (
    <CardItens data={restaurants} onPressItem={() => navigation.navigate("Restaurants")} />
  );
}
