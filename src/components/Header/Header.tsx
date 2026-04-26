import React from "react";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { styles } from "./Styles";
import { AppIcon } from "../AppIcon/Index";
import { useNavigation } from "@react-navigation/native";

type HeaderProps = {
  title?: string;
  subtitle?: string;
  onBackPress?: () => void;
  onProfilePress?: () => void;
};

export default function Header({ title, subtitle, onProfilePress }: HeaderProps) {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} onPress={handleBackPress}>
          <AppIcon name="back" size={32} />
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        <TouchableOpacity style={styles.avatar} onPress={onProfilePress}>
          <AppIcon name="user" size={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
