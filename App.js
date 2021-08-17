import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import { Text, View } from 'react-native';

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

    const [loaded, setLoaded] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user => {
            if(!user) {
                setLoaded(true);
                setLoggedIn(false);
            } else {
                setLoaded(true);
                setLoggedIn(true);
            }
        }))
    }, [])

    if(!loaded) {
        return (
            <View style ={{ flex: 1, justifyContent: 'center'}}>
                <Text>Loading</Text>
            </View>
        )
    }

    if(!loggedIn) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Landing">
                    <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }}/>
                    <Stack.Screen name="Register" component={RegisterScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

    return (
        <View style ={{ flex: 1, justifyContent: 'center'}}>
            <Text>User is logged in</Text>
        </View>
    )
}

