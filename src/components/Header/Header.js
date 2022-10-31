import React from 'react';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../redux-store/PopularMoviesReducer';



const Header = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <header className="header">

      <div className='left'>
        <NavLink to="/">Cinema App</NavLink>
      </div>

      <div className='right'>
        <GoogleLogin className='googleBtn'
          onSuccess={auth => {
            auth = true;
            dispatch(setAuth(auth));
            console.log(auth);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />;
      </div>


    </header>
  );


}
export default Header;