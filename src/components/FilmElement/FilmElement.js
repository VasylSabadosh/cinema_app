import React from 'react';
import { NavLink } from 'react-router-dom';
import './FilmElement.scss'

const FilmElement = ({movie, onClickDetail}) => {
    const posterPath = movie.poster_path

    return (
        <NavLink to = "/movie-details">
            <div className='FilmElement' onClick={() => onClickDetail(movie)}>
                <div className='poster'>
                    <img className='img' src= {"https://image.tmdb.org/t/p/w500/"+posterPath} alt="title"></img>
                </div>

                <h1 className='title'>
                    {movie.title}
                    <p className='overview'>{movie.overview}</p>
                </h1>
                <div className='subtitle'>
                    <p>{movie.release_date}</p>
                    <p className='avarage'>{movie.vote_average}</p>
                </div>

            </div>
        </NavLink>
    );
};

export default FilmElement;