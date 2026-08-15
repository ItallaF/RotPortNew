import React from "react";
import { ScrollView, Text } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "../Styles";


export default function Favorites() {
  return (
    <ScrollView style={styles.container}>
      <Header title="Favoritos" />
      <Text style={styles.text}>Em breve, seus favoritos aparecerão aqui!</Text>
    </ScrollView>
  );
}