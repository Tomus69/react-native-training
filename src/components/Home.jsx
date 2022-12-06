import { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import homeStyles from '../assets/styles/homeStyles';
import { getData, setData } from '../utils/asyncStorage';

import BottomBar from './BottomBar';
import Card from './Card';

export default function Home({ navigation }) {
    const [userData, setUserData] = useState(null);
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const onLogout = () => {
        setData('userData', { email: null, password: null, isLoggedIn: false });
        navigation.navigate('Auth');
    };

    useEffect(() => {
        getData('userData').then((res) => {
            if (res && res !== undefined) {
                if (!res.isLoggedIn) {
                    onLogout();
                    return;
                }
                setUserData(res);
            }
        });
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                setUsers(json);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <View style={homeStyles.loading}>
                <ActivityIndicator color="red" />
            </View>
        );
    }

    return (
        <View style={homeStyles.container}>
            <Text style={homeStyles.title}>Home</Text>
            <Text>{`Hello ${userData?.email}`}</Text>
            <TouchableOpacity onPress={onLogout}>
                <Text style={homeStyles.link}>Logout</Text>
            </TouchableOpacity>
            <ScrollView style={homeStyles.list}>
                {users
                    ? users.map((user) => {
                          return <Card key={user.id} user={user} />;
                      })
                    : null}
            </ScrollView>
            <BottomBar />
        </View>
    );
}
