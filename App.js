import { StatusBar } from 'expo-status-bar';
import React from 'react';

import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';

const firebaseConfig = {
    apiKey: "AIzaSyBZwpbLOligE-8OEteqrwoA0aifGe8Ya5g",
    authDomain: "instagram-dev-7a408.firebaseapp.com",
    projectId: "instagram-dev-7a408",
    storageBucket: "instagram-dev-7a408.appspot.com",
    messagingSenderId: "727090884405",
    appId: "1:727090884405:web:b6fdf79dea75c6b190a67c",
    measurementId: "G-2W853FXY6E"
};

if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

