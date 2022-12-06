import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import { getData, setData } from '../utils/asyncStorage';
import settingsStyles from '../assets/styles/settingsStyles';
import BottomBar from './BottomBar';

export default function Settings({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const onSubmit = () => {
        if (email.length < 1 || !email.includes('@')) {
            setError('Invalid email');
            return;
        }
        if (password.length < 4) {
            setError('Password 4 chars min');
            return;
        }
        setData('userData', { email, password, isLoggedIn: true })
            .then(() => {
                setError(null);
                setEmail('');
                setPassword('');
                navigation.navigate('Home');
            })
            .catch((e) => {
                console.error(e);
            });
    };

    useEffect(() => {
        getData('userData').then((res) => {
            if (res && res !== undefined) {
                if (!res.isLoggedIn) {
                    onLogout();
                    return;
                }
                setEmail(res.email);
                setPassword(res.password);
                setIsLoading(false);
            }
        });
    }, []);


    if (isLoading) {
        return (
            <View style={settingsStyles.loading}>
                <ActivityIndicator color="red" />
            </View>
        );
    }

    return (
        <View style={settingsStyles.container}>
            <Text style={settingsStyles.title}>Settings</Text>
            <TextInput
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                style={settingsStyles.input}
            />
            <TextInput
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                style={settingsStyles.input}
                secureTextEntry
                textContentType={'password'}
            />
            {error ? (
                <Text style={settingsStyles.errorMessage}>{error}</Text>
            ) : null}
            <TouchableOpacity onPress={onSubmit} style={settingsStyles.button}>
                <Text>Submit</Text>
            </TouchableOpacity>
            <BottomBar />
        </View>
    );
}
