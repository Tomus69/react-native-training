import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { getData } from './src/utils/asyncStorage'
import Auth from './src/components/Auth';
import Home from './src/components/Home';

const Stack = createNativeStackNavigator();

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        getData('userData').then((res) => {
            setIsLoggedIn(res.isLoggedIn);
        });
    }, []);

    return (
        <SafeAreaView>
            <NavigationContainer
                initialRouteName={isLoggedIn ? 'Home' : 'Auth'}
            >
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                        <Stack.Screen name="Auth" component={Auth} />
                        <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
