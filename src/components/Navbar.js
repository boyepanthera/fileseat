import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/css/Navbar.css';

const Navbar =  ()=>  {
    return (
        <nav className='Navbar'>
            <NavLink className='navbar-brand text-light NavLink display-4' to='/'>FS</NavLink>                    
        </nav>
    )
}

export default Navbar