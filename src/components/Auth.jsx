import { useEffect, useState } from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';

import { getData, setData } from '../utils/asyncStorage';
import authStyles from '../assets/styles/authStyles';

export default function Auth({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoginMode, setIsLoginMode] = useState(true);

    const onSubmit = () => {
        if (email.length < 1 || !email.includes('@')) {
            setError('Invalid email');
            return;
        }
        if (password.length < 4) {
            setError('Password 4 chars min');
            return;
        }
        if (!isLoginMode && password !== confirmPassword) {
            setError('Confirm password !== password');
            return;
        }
        setData('userData', { email, password, isLoggedIn: true }).then(() => {
            console.log('Submit:', { email, password });
            setError(null);
            setIsLoginMode(true);
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            navigation.navigate('Home');
        }).catch((e) => {
            console.error(e);
        });
    };

    useEffect(() => {
        getData('userData').then((res) => {
            if (res.isLoggedIn) {
                navigation.navigate('Home');
                return;
            }
        });
    }, [getData]);

    return (
        <View style={authStyles.container}>
            <Text style={authStyles.title}>
                {!isLoginMode ? 'Register' : 'Login'}
            </Text>
            <TextInput
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                style={authStyles.input}
            />
            <TextInput
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder="Password"
                style={authStyles.input}
                secureTextEntry
                textContentType={'password'}
            />
            {!isLoginMode ? (
                <TextInput
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    placeholder="Confirm password"
                    style={authStyles.input}
                    secureTextEntry
                    textContentType={'password'}
                />
            ) : null}
            {error ? (
                <Text style={authStyles.errorMessage}>{error}</Text>
            ) : null}
            <TouchableOpacity onPress={() => setIsLoginMode((prev) => !prev)}>
                <Text style={authStyles.link}>
                    {isLoginMode ? 'Register' : 'Login'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSubmit} style={authStyles.button}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}
