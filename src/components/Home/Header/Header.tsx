import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { styles } from "./Styles";

export default function Header() {
  return (
    <ImageBackground
      source={require("../../../assets/img/City.jpeg")}
      style={styles.header}
    >
      <View style={styles.overlay}>
        <Text style={styles.headerTitle}>Explore a Nossa Cidade</Text>
        <Text style={styles.headerSubtitle}>
          Natureza, cultura e experiências
        </Text>
      </View>
    </ImageBackground>
  );
}