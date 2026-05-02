import React from "react";
import { ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "../Styles";
import CardHotels from "../../components/Hotels/CardHotels/CardHotels";

export default function Hotels() {
  return (
    <ScrollView style={styles.container}>
      <Header title="Hotéis" />
      <CardHotels />
    </ScrollView>
  );
}