import React, { useEffect } from 'react';
import './Main.css';
import FilmElement from '../FilmElement/FilmElement';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularMovies } from '../../Actions/responsePopular';
import { createPages } from './Helper';

const Main = () => {

    const dispatch = useDispatch();
    const popmovies = useSelector(state => state.popmovies.results);
    const currentPage = useSelector(state => state.popmovies.currentPage);
    const searchQuery = useSelector(state => state.popmovies.searchQuery);

    const totalPages = 500;
    const pages = [];
    createPages(pages, totalPages, currentPage);


    useEffect(()=>{
        dispatch(getPopularMovies( currentPage, searchQuery))
    },[currentPage, searchQuery]);


    return (
        <div className='container'>
            <div className='main'>
                {popmovies.map( movie =>
                    <FilmElement key = {movie.id} movie = {movie} />
                )}
            </div>

        </div>
    );
};

export default Main;