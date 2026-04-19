import React from "react";
import { ScrollView } from "react-native";
import { styles } from "./Styles";
import Header from "../../components/Home/Header/Header";
import Categories from "../../components/Home/Categories/Categories";
import Highlights from "../../components/Home/Highlights/Highlights";

export default function Home() {

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Categories />
      <Highlights />      
    </ScrollView>
  );
}