import React from 'react';
import './SubHeader.scss';
import {NavLink} from "react-router-dom";
import SearchInput from '../SearchInput/SearchInput';


const SubHeader = () => {
    return (
        <div className='subHeader'>
            <div className='leftSubHeader'>
                <NavLink className='subHeaderNav' href='#'>Get latest</NavLink>
                <NavLink className='subHeaderNav' href='#'>Get popular</NavLink>
                <NavLink className='subHeaderNav' href='#'>Now playing</NavLink>
                <NavLink className='subHeaderNav' href='#'>Top rated</NavLink>
            </div>

            < SearchInput />
        </div>
    );
};

export default SubHeader;