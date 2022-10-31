import initialStore from "./initialStore";

const GET_POPULAR = "GET_POPULAR"
const GET_CURRENT_PAGE = "GET_CURRENT_PAGE"
const GET_SEARCH_QUERY = "GET_SEARCH_QUERY"
const SET_SELECTED_MOVIE = "SET_SELECTED_MOVIE"
const SET_MOVIE_DETAILS = "SET_MOVIE_DETAILS"
const GET_MOVIE_TRAILER = "GET_MOVIE_TRAILER"
const GET_AUTH = "GET_AUTH"

export default function PopularMoviesReducer(state = initialStore, action) {
    switch (action.type) {
        case GET_POPULAR:
            return {
                ...state,
                results: action.payload.results
            }
        case SET_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovie: action.payload
            }
        case SET_MOVIE_DETAILS:
            return {
                ...state,
                movieDetails: action.payload
            }
        case GET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case GET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            }
        case GET_MOVIE_TRAILER:
            return {
                ...state,
                movieTrailer: action.payload
            }
        case GET_AUTH:
            return {
                ...state,
                ayth: action.payload
            }
        default:
            return state;
    }
}

export const setPopMovies = (popmovies) => ({ type: GET_POPULAR, payload: popmovies });

export const setSelectedMovie = (selectedMovie) => ({ type: SET_SELECTED_MOVIE, payload: selectedMovie });
export const setMovieDetails = (movie) => ({type: SET_MOVIE_DETAILS, payload: movie});
export const setMovieTrailer = (trailer) => ({type: GET_MOVIE_TRAILER, payload: trailer});

export const setSearchQuery = (searchQuery) => ({ type: GET_SEARCH_QUERY, payload: searchQuery });
export const setCurrentPage = (currentPage) => ({ type: GET_CURRENT_PAGE, payload: currentPage });

export const setAuth = (ayth) => ({type: GET_AUTH, payload: ayth});