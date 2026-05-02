import React from "react";
import { useNavigation } from "@react-navigation/native";
import CardItens from "../../Card/CardItem";
import { hotels } from "../../Services/Hotels";
import { HotelsNavigationProp } from "../../../routes/types";


export default function CardHotels() {
  const navigation = useNavigation<HotelsNavigationProp>();

  return (
    <CardItens data={hotels} onPressItem={() => navigation.navigate("Hotels")} />
  );
}
