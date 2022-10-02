import axios from 'axios';

import { setPopMovies } from '../redux-store/PopularMoviesReducer';


// const GetMovieTrailer = 'https://api.themoviedb.org/3/movie/'+Id+'/videos?api_key=08d43d5667c78e53fbccfb0aa75131fd&language=en-US'
// const Trailer = 'https://www.youtube.com/watch?v='+trailerKey;

export const getPopularMovies = ( currentPage, searchQuery ) => {
    return async (dispatch) => {

        const url = searchQuery
        ? 'https://api.themoviedb.org/3/search/movie?api_key=08d43d5667c78e53fbccfb0aa75131fd&language=en-US&page=' + currentPage + '&query=' + searchQuery
        : 'https://api.themoviedb.org/3/movie/popular?api_key=08d43d5667c78e53fbccfb0aa75131fd&language=en-US&page=' + currentPage;

        const response = await axios.get(url)

        dispatch(setPopMovies(response.data))
    }
}


