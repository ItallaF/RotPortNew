import React from "react";
import { useNavigation } from "@react-navigation/native";
import { EventsNavigationProp } from "../../../routes/types";
import CardItens from "../../Card/CardItem";
import { events } from "../../Services/Events";

export default function CardEvents() {
  const navigation = useNavigation<EventsNavigationProp>();

  return (
    <CardItens data={events} onPressItem={() => navigation.navigate("Events")} />
  );
}
