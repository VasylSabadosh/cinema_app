import axios from 'axios';
import { setPopMovies, setMovieTrailer, setMovieCredits } from '../redux-store/PopularMoviesReducer';


export const getPopularMovies = ( currentPage, searchQuery ) => {
    return async (dispatch) => {

        const url = searchQuery
        ? 'https://api.themoviedb.org/3/search/movie?api_key=08d43d5667c78e53fbccfb0aa75131fd&language=en-US&page=' + currentPage + '&query=' + searchQuery
        : 'https://api.themoviedb.org/3/discover/movie?api_key=08d43d5667c78e53fbccfb0aa75131fd&language=en-US&page=' + currentPage;

        const response = await axios.get(url)

        dispatch(setPopMovies(response.data))
    }
}

export const getTopRatedMovies = ( currentPage, searchQuery ) => {
    return async (dispatch) => {

        const url = searchQuery
        ? 'https://api.themoviedb.org/3/search/movie?api_key=08d43d5667c78e53fbccfb0aa75131fd&language=en-US&page=' + currentPage + '&query=' + searchQuery
        : 'https://api.themoviedb.org/3/movie/top_rated?api_key=08d43d5667c78e53fbccfb0aa75131fd&language=en-US&page=' + currentPage;

        const response = await axios.get(url)

        dispatch(setPopMovies(response.data))
    }
}

export const getUpcomingMovies = ( currentPage, searchQuery ) => {
    return async (dispatch) => {

        const url = searchQuery
        ? 'https://api.themoviedb.org/3/search/movie?api_key=08d43d5667c78e53fbccfb0aa75131fd&language=en-US&page=' + currentPage + '&query=' + searchQuery
        : 'https://api.themoviedb.org/3/movie/upcoming?api_key=08d43d5667c78e53fbccfb0aa75131fd&language=en-US&page=' + currentPage;

        const response = await axios.get(url)

        dispatch(setPopMovies(response.data))
    }
}

export const getNowPlayingMovies = ( currentPage, searchQuery ) => {
    return async (dispatch) => {

        const url = searchQuery
        ? 'https://api.themoviedb.org/3/search/movie?api_key=08d43d5667c78e53fbccfb0aa75131fd&language=en-US&page=' + currentPage + '&query=' + searchQuery
        : 'https://api.themoviedb.org/3/movie/now_playing?api_key=08d43d5667c78e53fbccfb0aa75131fd&language=en-US&page=' + currentPage;

        const response = await axios.get(url)

        dispatch(setPopMovies(response.data))
    }
}

export const getMovieTrailer = ( id ) => {
    return async (dispatch) => {

        const url = 'https://api.themoviedb.org/3/movie/'+ id +'/videos?api_key=08d43d5667c78e53fbccfb0aa75131fd&language=en-US';

        const response = await axios.get(url)

        dispatch(setMovieTrailer(response.data.results[0].key))
    }
}

export const getMovieCredits = ( id ) => {
    return async (dispatch) => {

        const url = 'https://api.themoviedb.org/3/movie/'+ id +'/credits?api_key=08d43d5667c78e53fbccfb0aa75131fd&language=en-US';

        const response = await axios.get(url)

        dispatch(setMovieCredits(response.data));
    }
}
