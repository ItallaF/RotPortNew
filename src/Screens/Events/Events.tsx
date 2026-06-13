import React from "react";
import { ScrollView, View } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "../Styles";
import CardEvents from "../../components/Events/CardEvents/CardEvents";


export default function Events() {
  return (
    <View style={styles.container}>
      <Header title="Eventos" />
    
    <ScrollView style={styles.content}>
      <CardEvents />
    </ScrollView>
    </View>
  );
}