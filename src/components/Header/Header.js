import React from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import "./Header.scss"


const Header = () => {
    const auth = useSelector(state => state.auth);
    return (
      <header className="header">

          <div className='left'>
            <NavLink to="/">Cinema App</NavLink>
          </div>

          <div className='right'>
            {!auth ?<NavLink to="/login">Login</NavLink>:<NavLink to="/logout">LogOut</NavLink>}
            <NavLink to="/about">Registration</NavLink>
          </div>

      </header>
    );


}
export default Header;