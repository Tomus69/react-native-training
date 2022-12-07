import React, { useState } from 'react';
import { Text, TextInput, View, ScrollView } from 'react-native';

import moviesStyles from '../../assets/styles/moviesStyles';
import { getMoviesByTitle } from '../../services/movies';
import MovieCard from './MovieCard';
import BottomBar from '../BottomBar';

export default function Movies() {
    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState([]);

    const onSearch = (e) => {
        setSearchText(e);
        getMoviesByTitle(e).then((res) => setResults(res));
    };

    return (
        <View style={moviesStyles.container}>
            <Text style={moviesStyles.title}>Movies</Text>
            <TextInput
                onChangeText={onSearch}
                value={searchText}
                style={moviesStyles.input}
                placeholder="Search movie ..."
            />
            <ScrollView style={moviesStyles.list}>
                {results
                    ? results.map((movie) => {
                          return <MovieCard key={movie.imdbID} movie={movie} />;
                      })
                    : null}
            </ScrollView>
            <BottomBar />
        </View>
    );
}
