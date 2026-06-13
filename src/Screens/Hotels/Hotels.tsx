import React from "react";
import { ScrollView, View } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "../Styles";
import CardHotels from "../../components/Hotels/CardHotels/CardHotels";

export default function Hotels() {
  return (
    <View style={styles.container}>
        <Header title="Hotéis" />
        
        <ScrollView style={styles.content}>
          <CardHotels />
        </ScrollView>
    </View>
  );
}