import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import bottomBarStyles from '../assets/styles/bottomBarStyles';

export default function BottomBar() {
    const navigation = useNavigation();
    return (
        <View style={bottomBarStyles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Text>Settings</Text>
            </TouchableOpacity>
        </View>
    );
}
