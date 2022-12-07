import axios from 'axios';

const apiKey = process.env.REACT_APP_OMDB_API_KEY;

export const getMoviesByTitle = async (title) => {
    return axios
        .get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`)
        .then((success) => {
            return success.data.Search;
        })
        .catch((error) => {
            console.error(error);
        });
};

export const getMovieById = async (id) => {
    return axios
        .get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
        .then((success) => {
            return success.data;
        })
        .catch((error) => {
            console.error(error);
        });
};
