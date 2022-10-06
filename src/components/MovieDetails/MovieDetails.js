import React from 'react';
import { useSelector } from 'react-redux';


const MovieDetails = () => {
    const movieDetails = useSelector(state => state.popmovies.movieDetails);
    const posterPath = movieDetails.poster_path

    return (
        <div>
            <img src= {"https://image.tmdb.org/t/p/w500/"+posterPath}></img>
            <h1>{movieDetails.title}</h1>
        </div>
    );
};

export default MovieDetails;