import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Styles";

export default function Highlights() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Destaques</Text>

      <TouchableOpacity style={styles.featured}>
        <ImageBackground
          source={require("../../../assets/img/waterfall.jpg")}
          style={styles.featuredImage}
        >
          <View style={styles.featuredOverlay}>
            <Text style={styles.featuredText}>
              Cachoeiras incríveis te esperam
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}