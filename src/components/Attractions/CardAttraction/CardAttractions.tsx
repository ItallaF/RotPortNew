import React from "react";
import { useNavigation } from "@react-navigation/native";
import { attractions } from "../../Services/Attractions";
import CardItens from "../../Card/CardItem";
import { AttractionsNavigationProp } from "../../../routes/types";

export default function CardAttractions() {
  const navigation = useNavigation<AttractionsNavigationProp>();

  return (
    <CardItens data={attractions} onPressItem={() => navigation.navigate("Home")} />
  );
}
