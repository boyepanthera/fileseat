import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar =  ()=>  {
    return (
        <nav>
            <NavLink className='navbar-brand' to='/home'>FS</NavLink>                    
        </nav>
    )
}

export default Navbar