import React from 'react';
import './FilmElement.scss'

const FilmElement = ({movie}) => {
    const posterPath = movie.poster_path
    return (
        <div className='FilmElement'>
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
    );
};

export default FilmElement;