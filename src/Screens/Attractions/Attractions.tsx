import React from "react";
import { ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import CardAttractions from "../../components/Attractions/CardAttraction/CardAttractions";
import { styles } from "./Styles";

export default function Attractions() {
  return (
    <ScrollView style={styles.container}>
      <Header title="Atrações" />
      <CardAttractions />
    </ScrollView>
  );
}