import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/css/Navbar.css';

const Navbar =  ()=>  {
    return (
        <nav className='Navbar'>
            <NavLink className='navbar-brand text-light' to='/'>FS</NavLink>                    
        </nav>
    )
}

export default Navbar