import React from "react";
import { ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "../Styles";
import CardEvents from "../../components/Events/CardEvents/CardEvents";


export default function Events() {
  return (
    <ScrollView style={styles.container}>
      <Header title="Eventos" />
      <CardEvents />
    </ScrollView>
  );
}