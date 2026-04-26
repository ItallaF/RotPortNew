import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from '../routesNames';
import TabNavigator from '../Tabs/TabNavigator';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ROUTES.APP}
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
}