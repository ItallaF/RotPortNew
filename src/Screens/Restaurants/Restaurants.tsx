import React from "react";
import { ScrollView, View } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "../Styles";
import CardRestaurants from "../../components/Restaurants/CardRestaurants/CardRestaurants";

export default function Restaurants() {
  return (
    <View style={styles.container}>
        <Header title="Restaurantes" />

      <ScrollView style={styles.content}>
        <CardRestaurants />
      </ScrollView>
    </View>
  );
}