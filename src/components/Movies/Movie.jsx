import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';

import BottomBar from '../BottomBar';
import movieStyles from '../../assets/styles/movieStyles';
import { useRoute } from '@react-navigation/native';
import { getMovieById } from '../../services/movies';

export default function Movie() {
    const { params } = useRoute();
    const { movieId } = params;
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getMovieById(movieId).then((res) => {
            setMovie(res);
            setIsLoading(false)
        });
    }, [movieId]);

    if (isLoading) {
        return (
            <View style={movieStyles.loading}>
                <ActivityIndicator color="red" />
            </View>
        );
    }

    return (
        <View style={movieStyles.container}>
            <Text style={movieStyles.title}>{movie.Title}</Text>
            <Text>{`Date: ${movie.Released}`}</Text>
            <Image source={{ uri: movie.Poster }} style={movieStyles.img} />
            <BottomBar />
        </View>
    );
}
