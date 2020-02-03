import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/css/Navbar.css';
const Navbar =  ()=>  {
    return (
        <nav className='Navbar'>
            <NavLink className='NavLink' to='/'>FS</NavLink>  
            <div>
            <NavLink>SignIn</NavLink>                  
            <NavLink>About</NavLink>                  
            <NavLink>Help</NavLink> 
            </div>                 
        </nav>
    )
}

export default Navbar