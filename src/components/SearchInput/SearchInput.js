import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setSearchQuery} from '../../redux-store/PopularMoviesReducer'

const SearchInput = () => {

    const dispatch  = useDispatch();
    const searchQuery = useSelector(state => state.popmovies.searchQuery);

    const onChange = e => {
        dispatch(setSearchQuery(e.target.value));
    }

    return (
        <div className='rightSubHeader'>
            <input className='subHeaderInput' type='text' value={searchQuery} onChange = {onChange} placeholder = 'search movie'></input>
        </div>
    );
};

export default SearchInput;