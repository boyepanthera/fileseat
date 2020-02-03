import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/css/Navbar.css';
const Navbar =  ()=>  {
    return (
        <nav className='justify-between'>
            <div>                
                <NavLink className='NavLink text-white font-bold' to='/'>FS</NavLink>  
            </div>
            <div>
                <NavLink className='-m-1' to='/about'><button className='bg-white rounded-l-lg font-bold px-2 py-1'>About</button></NavLink>                  
                <NavLink className='-m-1' to='/auth'><button className='bg-white font-bold px-2 py-1'>SignIn</button></NavLink>                  
                <NavLink className='-m-1' to='/help'><button className='bg-white font-bold px-2 py-1 rounded-r-lg'>Help</button></NavLink> 
            </div>                 
        </nav>
    )
}

export default Navbar