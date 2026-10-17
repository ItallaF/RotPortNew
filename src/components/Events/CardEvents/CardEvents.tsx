import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationProp } from "../../../routes/types";
import CardItens from "../../Card/CardItem";
import { useEvents } from "../../../Hook/useEvents";
import { ActivityIndicator, Text, View } from "react-native";

export default function CardEvents() {
  const navigation = useNavigation<RootNavigationProp>();
  const { data, loading, error } = useEvents();

  if (loading) {
    return (
      <View
        style={{
          paddingVertical: 40,
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{
          paddingVertical: 40,
        }}
      >
        <Text>
          Não foi possível carregar os Eventos.
        </Text>
      </View>
    );
  }

  return (
    <CardItens data={data} onPressItem={(item) => navigation.navigate("Details", { id: item.id, type: "event" })} />
  );
}
