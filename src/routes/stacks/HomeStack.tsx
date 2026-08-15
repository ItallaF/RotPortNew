import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../types";
import Home from "../../Screens/Home/Home";
import Hotels from "../../Screens/Hotels/Hotels";
import Restaurants from "../../Screens/Restaurants/Restaurants";
import Attractions from "../../Screens/Attractions/Attractions";
import Events from "../../Screens/Events/Events";

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={Home}
      />

      <Stack.Screen
        name="Attractions"
        component={Attractions}
      />

      <Stack.Screen
        name="Hotels"
        component={Hotels}
      />

      <Stack.Screen
        name="Restaurants"
        component={Restaurants}
      />

      <Stack.Screen
        name="Events"
        component={Events}
      />
    </Stack.Navigator>
  );
}