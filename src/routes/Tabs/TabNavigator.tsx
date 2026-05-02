import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from '../stacks/HomeStack';
import AttractionsStack from '../stacks/AttractionsStack';
import { ROUTES } from '../routesNames';
import EventsStack from '../stacks/EventsStack';
import HotelsStack from '../stacks/HotelsStack';
import RestaurantsStack from '../stacks/RestaurantsStack';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={ROUTES.HOME} component={HomeStack} />
      <Tab.Screen name={ROUTES.ATTRACTIONS} component={AttractionsStack} />
      <Tab.Screen name={ROUTES.EVENTS} component={EventsStack} />
      <Tab.Screen name={ROUTES.RESTAURANTS} component={RestaurantsStack} />
      <Tab.Screen name={ROUTES.HOTELS} component={HotelsStack} />
    </Tab.Navigator>
  );
}