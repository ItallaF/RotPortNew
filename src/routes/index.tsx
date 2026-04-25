import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './Auth/AuthNavigator';


export default function Routes() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}