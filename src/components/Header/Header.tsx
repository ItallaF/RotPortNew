import React from "react";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { styles } from "./Styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton}>
          <Text>←</Text>
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.title}>Cachoeira do Serrado</Text>
          <Text style={styles.subtitle}>Porteirinha • MG</Text>
        </View>

        <TouchableOpacity style={styles.avatar}>
          <Text>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
