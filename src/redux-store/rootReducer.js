import {combineReducers} from "redux";
import PopularMoviesReducer from './PopularMoviesReducer';


export default combineReducers({
    popmovies: PopularMoviesReducer,
},);