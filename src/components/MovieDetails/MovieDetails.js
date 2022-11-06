import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './MovieDetails.scss';
import { getMovieTrailer } from '../../Actions/responsePopular';
import Actor from './Actor';


const MovieDetails = () => {
    const dispatch = useDispatch();
    const movieDetails = useSelector(state => state.popmovies.movieDetails);
    const movieCredits = useSelector(state => state.popmovies.movieCredits);
    const allActors = movieCredits.cast;
    const actors = allActors.slice(0, 10);
    console.log(allActors);
    const movieTrailer = useSelector(state => state.popmovies.movieTrailer);
    const posterPath = movieDetails.poster_path;

    useEffect(()=>{
        dispatch(getMovieTrailer(movieDetails.id));
    }, []);
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
                    <h5> Actors: <Actor actors = {actors}/> </h5>
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

            <div>

            </div>



        </div>
    );
};

export default MovieDetails;