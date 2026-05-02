import React from "react";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import { AppIcon } from "../../AppIcon/Index";


type Props = {
  image: any;
  title: string;
  onBack: () => void;
};

export function Hero({ image, title, onBack }: Props) {
  return (
    <ImageBackground source={image} style={styles.hero}>
      <View style={styles.overlay} />

      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <AppIcon name="back" size={32} />
      </TouchableOpacity>

      <Text style={styles.heroTitle}>{title}</Text>
    </ImageBackground>
  );
}