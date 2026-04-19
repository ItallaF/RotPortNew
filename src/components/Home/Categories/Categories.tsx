import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Styles";
import { AppIcon } from "../../AppIcon/Index";
import { IconName } from "../../../../assets/Icons";

type Category = {
  id: number;
  name: string;
  icon: IconName;
};

export default function Categories() {

  const categories: Category[] = [
    { id: 1, name: "Atrações", icon: "attractions" },
    { id: 2, name: "Hotéis", icon: "hotel" },
    { id: 3, name: "Restaurantes", icon: "restaurant" },
    { id: 4, name: "Eventos", icon: "events" },
  ];
    
  return (
    <View style={styles.section}>
      <Text style={styles.title}>O que você procura?</Text>

      <View style={styles.grid}>
        {categories.map(item => (
          <TouchableOpacity key={item.id} style={styles.card}>
            <AppIcon name={item.icon} size={32} />
            <Text style={styles.cardText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}