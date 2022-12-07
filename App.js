import React, { Suspense, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { getData } from './src/utils/asyncStorage';

const Auth = React.lazy(() => import('./src/components/Auth'));
const Home = React.lazy(() => import('./src/components/Home'));
const Movies = React.lazy(() => import('./src/components/Movies/index'));
const Movie = React.lazy(() => import('./src/components/Movies/Movie'));
const Settings = React.lazy(() => import('./src/components/Settings'));

const Stack = createNativeStackNavigator();

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        getData('userData').then((res) => {
            if (res.isLoggedIn !== null) {
                setIsLoggedIn(res.isLoggedIn);
                return;
            }
            setIsLoggedIn(false);
        });
    }, []);

    return (
        <SafeAreaView>
            <NavigationContainer
                initialRouteName={isLoggedIn ? 'Home' : 'Auth'}
            >
                <Suspense>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}
                    >
                        <Stack.Screen name="Auth" component={Auth} />
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Movies" component={Movies} />
                        <Stack.Screen name="Movie" component={Movie} />
                        <Stack.Screen name="Settings" component={Settings} />
                    </Stack.Navigator>
                </Suspense>
            </NavigationContainer>
        </SafeAreaView>
    );
}
