import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from '../stacks/HomeStack';
import AttractionsStack from '../stacks/AttractionsStack';
import { ROUTES } from '../routesNames';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={ROUTES.HOME} component={HomeStack} />
      <Tab.Screen name={ROUTES.ATTRACTIONS} component={AttractionsStack} />
    </Tab.Navigator>
  );
}