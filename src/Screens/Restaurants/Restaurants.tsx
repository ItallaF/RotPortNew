import React from "react";
import { ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "../Styles";
import CardRestaurants from "../../components/Restaurants/CardRestaurants/CardRestaurants";

export default function Restaurants() {
  return (
    <ScrollView style={styles.container}>
      <Header title="Restaurantes" />
      <CardRestaurants />
    </ScrollView>
  );
}