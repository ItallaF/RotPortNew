import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/types";
import { styles } from "./Styles";
import { useDetailsData } from "../../Hook/useDetailsData";
import { Hero } from "../../components/Details/Hero/hero";
import { About } from "../../components/Details/About/About";
import { ActionBar } from "../../components/Details/ActionBar/ActionBar";

type RouteProps = RouteProp<RootStackParamList, "Details">;

export default function DetailsScreen() {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation();

  const { id, type } = route.params;

  const data = useDetailsData({ id, type });

  if (!data) {
    return <Text>Item não encontrado</Text>;
  }

  return (
    <View style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false} >
        <Hero
          image={data.image}
          title={data.name}
          onBack={() => navigation.goBack()}
        />
        <About category={data.category} />

      </ScrollView>
      <ActionBar type={type}
        data={{
          name: data.name,
        }} />
    </View>
  );
}