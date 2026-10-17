import React from "react";
import { useNavigation } from "@react-navigation/native";
import CardItens from "../../Card/CardItem";
import { RootNavigationProp } from "../../../routes/types";
import { ActivityIndicator, Text, View } from "react-native";
import { useRestaurants } from "../../../Hook/useRestaurants";


export default function CardRestaurants() {
  const navigation = useNavigation<RootNavigationProp>();

  const { data, loading, error } = useRestaurants();

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
            alignItems: "center",
          }}
        >
          <Text>
            Não foi possível carregar os Restaurantes.
          </Text>
        </View>
      );
    }

  return (
    <CardItens data={data} onPressItem={(item) => navigation.navigate("Details", { id: item.id, type: "restaurant" })} />
  );
}
