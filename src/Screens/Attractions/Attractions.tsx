import React from "react";
import Header from "../../components/Header/Header";
import CardAttractions from "../../components/Attractions/CardAttraction/CardAttractions";
import { ScrollView } from "react-native";

export default function Attractions() {
  return (
    <ScrollView>
      <Header title="Atrações" />
      <CardAttractions />
    </ScrollView>
  );
}