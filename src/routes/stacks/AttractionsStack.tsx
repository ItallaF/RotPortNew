import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Attractions from '../../Screens/Attractions/Attractions';
import { AttractionsStackParamList } from '../types';

const Stack = createNativeStackNavigator<AttractionsStackParamList>();

export default function AttractionsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Attractions" component={Attractions} />
      {/* <Stack.Screen name="AttractionDetails" component={AttractionDetails} /> */}
    </Stack.Navigator>
  );
}