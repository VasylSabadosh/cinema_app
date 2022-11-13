import React from 'react';
import {  useSelector } from 'react-redux';
import './MovieDetails.scss';
import Actor from './Actor';
import { useParams } from 'react-router-dom';


const MovieDetails = () => {

    const {id, title} = useParams();

    const movieDetails = useSelector(state => state.popmovies.movieDetails);
    const movieCredits = useSelector(state => state.popmovies.movieCredits);
    const movieTrailer = useSelector(state => state.popmovies.movieTrailer);

    // const actors = movieCredits.cast;

    const posterPath = movieDetails.poster_path;
    const url = 'https://www.youtube.com/embed/'+movieTrailer;

    return (
        <div className='movie_details'>
            <div className='movie_details_description'>
                <div className='movie_details_description_left'>
                    <img src= {"https://image.tmdb.org/t/p/w500/"+posterPath}></img>
                </div>
                <div className='movie_details_description_right'>
                    <h5 className='movie_details_title'>{movieDetails.title}</h5>
                    <h5>Release date:  {movieDetails.release_date}</h5>
                    <h5>Ratings:  {movieDetails.vote_average}</h5>
                    {/* <h5> Actors: <Actor actors = {actors}/> </h5> */}
                    <div className='movieDetails_overview'>
                        <h5>What is the movie about?</h5>
                        <span> {movieDetails.overview}</span>
                    </div>
                </div>
            </div>

            <div className='movie_details_trailer'>
                <div className='trailer'>
                    <iframe width="640" height="360" src={url} ></iframe>
                </div>
            </div>

        </div>
    );
};

export default MovieDetails;