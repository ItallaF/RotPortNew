import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Styles";
import { attractions } from "../../Services/Attractions";
import { NavigationProps } from "../../../routes/types";

export default function CardAttractions() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.containerConteudo}>
      {attractions.map(item => (
        <View key={item.id}>
          <Text style={styles.buttonTextStyle}>{item.name}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(item.route)}
            activeOpacity={0.5}>
            <Image
              source={require(`../../../assets/img/waterfall.jpg`)}
              style={styles.img}
            />
            <Text style={styles.texImage}>Ver mais</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}
