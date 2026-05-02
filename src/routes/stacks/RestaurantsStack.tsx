import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RestaurantsStackParamList } from '../types';
import Restaurants from '../../Screens/Restaurants/Restaurants';


const Stack = createNativeStackNavigator<RestaurantsStackParamList>();

export default function RestaurantsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Restaurants" component={Restaurants} />
      {/* <Stack.Screen name="EventDetails" component={EventDetails} /> */}
    </Stack.Navigator>
  );
}