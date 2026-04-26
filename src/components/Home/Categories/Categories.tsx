import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Styles";
import { AppIcon } from "../../AppIcon/Index";
import { categories } from "../../Services/Categories";
import { NavigationProps } from "../../../routes/types";


export default function Categories() {
  const navigation = useNavigation<NavigationProps>();
    
  return (
    <View style={styles.section}>
      <Text style={styles.title}>O que você procura?</Text>

      <View style={styles.grid}>
        {categories.map(item => (
          <TouchableOpacity key={item.id} style={styles.card} onPress={() => navigation.navigate(item.route)}>
            <AppIcon name={item.icon} size={32} />
            <Text style={styles.cardText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}