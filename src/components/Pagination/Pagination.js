import React from 'react';
import "./Pagination.scss"
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux-store/PopularMoviesReducer';
import { createPages } from '../Main/Helper';

const Footer = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.popmovies.currentPage);
  const totalPages = 500;
  const pages = [];
  createPages(pages, totalPages, currentPage)

  return (
    <div className={"pagination"}>
      <div className='pages'>
                {pages.map( (page, index) => <span
                key={index}
                className={currentPage === page ? 'current-page' : 'page'}
                onClick={()=>dispatch(setCurrentPage(page))}>
                    {page}
                </span> )}
      </div>

    </div>
  );
};

export default Footer;