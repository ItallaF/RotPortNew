import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";


export function ActionBar() {
  return (
    <View style={styles.actionBar}>
      <TouchableOpacity style={styles.favoriteBtn}>
        <Text>♡</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ctaBtn}>
        <Text style={styles.ctaText}>Explorar</Text>
      </TouchableOpacity>
    </View>
  );
}