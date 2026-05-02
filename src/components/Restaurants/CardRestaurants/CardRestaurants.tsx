import React from "react";
import { useNavigation } from "@react-navigation/native";
import CardItens from "../../Card/CardItem";
import { RootNavigationProp } from "../../../routes/types";
import { restaurants } from "../../Services/Restaurants";


export default function CardRestaurants() {
  const navigation = useNavigation<RootNavigationProp>();

  return (
    <CardItens data={restaurants} onPressItem={(item) => navigation.navigate("Details", { id: item.id, type: "restaurant" })} />
  );
}
