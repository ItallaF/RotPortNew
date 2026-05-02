import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationProp } from "../../../routes/types";
import CardItens from "../../Card/CardItem";
import { events } from "../../Services/Events";

export default function CardEvents() {
  const navigation = useNavigation<RootNavigationProp>();

  return (
    <CardItens data={events} onPressItem={(item) => navigation.navigate("Details", { id: item.id, type: "event" })} />
  );
}
