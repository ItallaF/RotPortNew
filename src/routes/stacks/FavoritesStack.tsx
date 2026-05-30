import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavoritesStackParamList } from '../types';
import Favorites from '../../Screens/Favorites/Favorites';

const Stack = createNativeStackNavigator<FavoritesStackParamList>();

export default function FavoritesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
}