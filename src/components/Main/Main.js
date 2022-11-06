import React, { useEffect } from 'react';
import './Main.css';
import FilmElement from '../FilmElement/FilmElement';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularMovies, getMovieCredits } from '../../Actions/responsePopular';
import { createPages } from './Helper';
import { setMovieDetails } from '../../redux-store/PopularMoviesReducer';
import Pagination from "../Pagination/Pagination";


const Main = () => {

    const dispatch = useDispatch();
    const popmovies = useSelector(state => state.popmovies.results);
    const currentPage = useSelector(state => state.popmovies.currentPage);
    const searchQuery = useSelector(state => state.popmovies.searchQuery);


    const totalPages = 500;
    const pages = [];
    createPages(pages, totalPages, currentPage);

    const onClickDetail = (movie, id) => {
        dispatch(setMovieDetails(movie));
        dispatch(getMovieCredits(id));

    }

    useEffect(()=>{
        dispatch(getPopularMovies( currentPage, searchQuery));
    },[currentPage, searchQuery]);



    return (
        <div className='container'>
            <div className='main'>

                {popmovies.map( movie =>
                    <FilmElement key = {movie.id} movie = {movie} onClickDetail = {onClickDetail} /> )
                }

            </div>
            <Pagination />


        </div>
    );
};

export default Main;