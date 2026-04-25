import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../routesNames';
import Attractions from '../../Screens/Attractions/Attractions';

const Stack = createNativeStackNavigator();

export default function AttractionsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ROUTES.ATTRACTIONS}
        component={Attractions}
      />
    </Stack.Navigator>
  );
}