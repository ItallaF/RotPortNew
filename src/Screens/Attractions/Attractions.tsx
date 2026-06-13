import React from "react";
import { ScrollView, View } from "react-native";
import Header from "../../components/Header/Header";
import CardAttractions from "../../components/Attractions/CardAttraction/CardAttractions";
import { styles } from "../Styles";

export default function Attractions() {
  return (
    <View style={styles.container}>
      <Header title="Atrações" />

      <ScrollView style={styles.content}>
        <CardAttractions />
      </ScrollView>
    </View>
  );
}