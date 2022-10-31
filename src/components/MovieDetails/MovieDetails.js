import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './MovieDetails.scss';
import { getMovieTrailer } from '../../Actions/responsePopular';


const MovieDetails = () => {
    const dispatch = useDispatch();
    const movieDetails = useSelector(state => state.popmovies.movieDetails);
    const movieTrailer = useSelector(state => state.popmovies.movieTrailer);
    const genres = useSelector(state => state.popmovies.genres);

    const posterPath = movieDetails.poster_path;

    useEffect(()=>{
        dispatch(getMovieTrailer(movieDetails.id));
        console.log(movieDetails);
    }, []);
    console.log(genres, movieDetails.genre_ids);
    const url = 'https://www.youtube.com/embed/'+movieTrailer;


    return (
        <div className='movie_details'>
            <div className='movie_details_description'>
                <div className='movie_details_description_left'>
                    <img src= {"https://image.tmdb.org/t/p/w500/"+posterPath}></img>
                </div>
                <div className='movie_details_description_right'>
                    <h1 className='movie_details_title'>{movieDetails.title}</h1>
                    <h1>Release date:  {movieDetails.release_date}</h1>


                    <h1>Ratings:  {movieDetails.vote_average}</h1>
                    <h1>Cast Actors: {movieDetails.genre_ids}</h1>
                    <div>


                    </div>
                </div>
            </div>
            <div>
                <span>{movieDetails.overview}</span>
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