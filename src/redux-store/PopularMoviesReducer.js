import initialStore from "./initialStore";

const GET_POPULAR = "GET_POPULAR"
const GET_CURRENT_PAGE = "GET_CURRENT_PAGE"
const GET_SEARCH_QUERY = "GET_SEARCH_QUERY"



export default function PopularMoviesReducer(state = initialStore, action) {
    switch(action.type) {
        case GET_POPULAR:
            return {
                ...state,
                results: action.payload.results
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
        default:
            return state;
    }
}

export const setPopMovies = (popmovies) => ({type:GET_POPULAR, payload:popmovies});
export const setSearchQuery = (searchQuery) => ({type:GET_SEARCH_QUERY, payload:searchQuery});
export const setCurrentPage = (currentPage) => ({type:GET_CURRENT_PAGE, payload:currentPage});
