import React from 'react';
import { Text, View } from 'react-native';

import cardStyles from '../assets/styles/cardStyles';

export default function Card({ user }) {
    return (
        <View style={cardStyles.item}>
            <Text>{`${user.id}: ${user.name}`}</Text>
        </View>
    );
}
