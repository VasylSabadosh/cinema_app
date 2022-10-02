import React from 'react';
import './SubHeader.scss';
import {NavLink} from "react-router-dom";
import SearchInput from '../SearchInput/SearchInput';

import { useDispatch, useSelector } from 'react-redux';
import { getTopRatedMovies, getPopularMovies, getNowPlayingMovies, getUpcomingMovies } from '../../Actions/responsePopular';


const SubHeader = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.popmovies.currentPage);
    const searchQuery = useSelector(state => state.popmovies.searchQuery);

    const PopMovies = () => {
        dispatch(getPopularMovies( currentPage, searchQuery))
    }
    const topRated = () => {
        dispatch(getTopRatedMovies( currentPage, searchQuery))
    }

    const upcoming = () => {
        dispatch(getUpcomingMovies( currentPage, searchQuery))
    }

    const nowPlaying = () => {
        dispatch(getNowPlayingMovies( currentPage, searchQuery))
    }

    return (
        <div className='subHeader'>
            <div className='leftSubHeader'>
                <NavLink to = '/' className='subHeaderNav' href='#' onClick={PopMovies}>Popular movies</NavLink>
                <NavLink to = '/get_top_rated' className='subHeaderNav' href='#' onClick={topRated}>Top rated</NavLink>
                <NavLink to = '/get_upcoming' className='subHeaderNav' href='#' onClick={upcoming}>Upcoming</NavLink>
                <NavLink to = '/now_playing' className='subHeaderNav' href='#' onClick={nowPlaying}>Now playing</NavLink>
            </div>

            < SearchInput />
        </div>
    );
};

export default SubHeader;