import React from "react";

import {
  ActivityIndicator,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CardItens from "../../Card/CardItem";
import { RootNavigationProp } from "../../../routes/types";
import { useAttractions } from "../../../Hook/useAttractions";


export default function CardAttractions() {
  const navigation =
    useNavigation<RootNavigationProp>();

  const {
    data,
    loading,
    error,
  } = useAttractions();

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
          Não foi possível carregar as atrações.
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
          type: "attractions",
        })
      }
    />
  );
}
