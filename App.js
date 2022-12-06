import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Auth from './src/components/Auth';
import Home from './src/components/Home';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <SafeAreaView>
            <NavigationContainer initialRouteName="Auth">
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
