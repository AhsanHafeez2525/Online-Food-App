import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SignForm} from './authNavigation';
export default function RootNavigation() {
  return (
    <NavigationContainer>
      <SignForm />
    </NavigationContainer>
  );
}
