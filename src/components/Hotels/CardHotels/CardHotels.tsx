import React from "react";
import {
  ActivityIndicator,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CardItens from "../../Card/CardItem";
import { useHotels } from "../../../Hook/useHotels";
import { RootNavigationProp } from "../../../routes/types";

export default function CardHotels() {
  const navigation =
    useNavigation<RootNavigationProp>();

  const {
    data,
    loading,
    error,
  } = useHotels();

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
          Não foi possível carregar os hotéis.
        </Text>
      </View>
    );
  }

  return (
    <CardItens
      data={data}
      onPressItem={(item) =>
        navigation.navigate("Details", {
          id: item.id,
          type: "hotel",
        })
      }
    />
  );
}
