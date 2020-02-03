import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/css/Navbar.css';
const Navbar =  ()=>  {
    return (
        <nav className='Navbar'>
            <div>                
                <NavLink className='NavLink text-white' to='/'>FS</NavLink>  
            </div>
            <div>
                <NavLink className='text-white m-1' to='/auth'><button className='bg-white'>SignIn</button></NavLink>                  
                <NavLink className='text-white m-1' to='/about'>About</NavLink>                  
                <NavLink className='text-white m-1' to='/help'>Help</NavLink> 
            </div>                 
        </nav>
    )
}

export default Navbar