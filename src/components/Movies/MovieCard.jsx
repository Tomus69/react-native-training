import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import movieCardStyles from '../../assets/styles/movieCardStyles';

export default function MovieCard({ movie }) {
    const navigation = useNavigation();

    const onPressMovie = () => {
        navigation.navigate('Movie', { movieId: movie.imdbID });
    }

    return (
        <View style={movieCardStyles.item}>
            <TouchableOpacity onPress={onPressMovie}>
                <Text style={movieCardStyles.title}>{movie.Title}</Text>
            </TouchableOpacity>
            <Image source={{ uri: movie.Poster }} style={movieCardStyles.img} />
        </View>
    );
}
