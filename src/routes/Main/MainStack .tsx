import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from '../Tabs/TabNavigator';
import DetailsScreen from '../../Screens/Details/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="App"
        component={TabNavigator}
      />

      <Stack.Screen
        name="Details"
        component={DetailsScreen}
      />

    </Stack.Navigator>
  );
}