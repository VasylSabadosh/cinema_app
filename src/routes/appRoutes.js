import {
    Routes,
    Route,
  } from "react-router-dom";
import React from 'react';
import NotFoundPage from "../pages/Notfoundpage";
import Layout from "../pages/Layout";
import Movies from "../pages/Movies";
import MovieDetails from "../components/MovieDetails/MovieDetails";

function AppRoutes() {
    return (
      <>
        <Routes>

          <Route path="/" element={<Layout/>}>
            <Route index element={<Movies/>}/>
            <Route path="/get_upcoming" element={<Movies/>}/>
            <Route path="/get_top_rated" element={<Movies/>}/>
            <Route path="/now_playing" element={<Movies/>}/>
            <Route path="/movie-details" element={<MovieDetails/>}/>

            <Route path="*" element={<NotFoundPage/>}/>
          </Route>

        </Routes>
      </>
    );
}

export default AppRoutes;