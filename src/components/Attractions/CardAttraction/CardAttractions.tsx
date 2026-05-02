import React from "react";
import { useNavigation } from "@react-navigation/native";
import { attractions } from "../../Services/Attractions";
import CardItens from "../../Card/CardItem";
import { RootNavigationProp } from "../../../routes/types";

export default function CardAttractions() {
  const navigation = useNavigation<RootNavigationProp>();

  return (
    <CardItens data={attractions} onPressItem={(item) => navigation.navigate("Details", { id: item.id, type: "attraction" })} />
  );
}
