import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HotelsStackParamList } from '../types';
import Hotels from '../../Screens/Hotels/Hotels';



const Stack = createNativeStackNavigator<HotelsStackParamList>();

export default function HotelsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Hotels" component={Hotels} />
    </Stack.Navigator>
  );
}