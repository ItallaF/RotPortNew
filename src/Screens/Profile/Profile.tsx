import React from "react";
import { ScrollView, Text } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "../Styles";


export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      <Header title="Perfil" />
      <Text style={styles.text}>Em breve, seu perfil aparecerá aqui!</Text>
    </ScrollView>
  );
}