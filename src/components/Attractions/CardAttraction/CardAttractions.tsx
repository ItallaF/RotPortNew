import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Styles";
import { attractions } from "../../Services/Attractions";
import { NavigationProps } from "../../../routes/types";

export default function CardAttractions() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <FlatList
      data={attractions}
      numColumns={2}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
      columnWrapperStyle={styles.columnWrapper}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => navigation.navigate(item.route)}
        >
          <Image
            source={item.image}
            style={styles.img}
          />

          <View style={styles.cardContent}>
            <Text numberOfLines={2} style={styles.title}>
              {item.name}
            </Text>

            <Text style={styles.category}>
              {item.category}
            </Text>

            <Text style={styles.more}>Ver mais...</Text>
          </View>
        </TouchableOpacity>
      )} 
    />
  );
}
