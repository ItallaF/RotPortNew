import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Styles";


type Props = {
  category?: string;
};

export function About({ category }: Props) {
  return (
    <View style={styles.AboutContainer}>
      <Text style={styles.category}>{category}</Text>

      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Experiência incrível para turistas.
      </Text>
    </View>
  );
}