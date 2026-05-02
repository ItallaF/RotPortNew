import React from "react";
import { useNavigation } from "@react-navigation/native";
import CardItens from "../../Card/CardItem";
import { hotels } from "../../Services/Hotels";
import { RootNavigationProp } from "../../../routes/types";


export default function CardHotels() {
  const navigation = useNavigation<RootNavigationProp>();

  return (
    <CardItens data={hotels} onPressItem={(item) => navigation.navigate("Details", { id: item.id, type: "hotel" })} />
  );
}
