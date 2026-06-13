import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Styles";
import { CardItemTypes } from "../../types/Components/CardItemTypes";

type CardItemProps = {
  data: CardItemTypes[];
  onPressItem: (item: CardItemTypes) => void;
};

export default function CardItens({ data, onPressItem }: CardItemProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => onPressItem(item)}
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
    </View>
  );
}
