import { Text, View, TouchableOpacity } from 'react-native';

import homeStyles from '../assets/styles/homeStyles';

export default function Home({ navigation }) {
    const onLogout = () => {
        navigation.navigate('Auth');
    };
    return (
        <View style={homeStyles.container}>
            <Text style={homeStyles.title}>Home</Text>
            <TouchableOpacity onPress={onLogout}>
                <Text style={homeStyles.link}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}
