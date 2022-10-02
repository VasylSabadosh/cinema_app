import {
    Routes,
    Route,
  } from "react-router-dom";
import React from 'react';
import NotFoundPage from "../pages/Notfoundpage";
import Layout from "../pages/Layout";
import Movies from "../pages/Movies";

  
  
function AppRoutes() {
    return (
      <>
        <Routes>
   
          <Route path="/" element={<Layout/>}>
            <Route index element={<Movies/>}/>
   
            <Route path="*" element={<NotFoundPage/>}/>
          </Route>
  
        </Routes>
      </>
    );
}
  
export default AppRoutes;