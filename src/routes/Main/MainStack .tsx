import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from '../routesNames';
import TabNavigator from '../Tabs/TabNavigator';
import HotelsStack from '../stacks/HotelsStack';
import RestaurantsStack from '../stacks/RestaurantsStack';
import DetailsScreen from '../../Screens/Details/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ROUTES.APP}
        component={TabNavigator}
      />

      <Stack.Screen name={ROUTES.HOTELS} component={HotelsStack} />
      <Stack.Screen name={ROUTES.RESTAURANTS} component={RestaurantsStack} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}