import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/css/Navbar.css';
const Navbar =  ()=>  {
    return (
        // <nav className='justify-between'>
            <div className='flex justify-between'>
                <div className='w-1/2'>
                    <NavLink className='NavLink text-white font-bold' to='/'>FS</NavLink>
                </div>
                <div className='w-1/2 mt-4'>
                    <div className='float-right mr-10'>
                    <NavLink className='border-gray-600 border-r-2' to='/about'><button className='bg-white rounded-l-lg font-bold px-2 py-1  '>About</button></NavLink>
                    <NavLink className='' to='/auth'><button className='bg-white font-bold px-2 py-1'>SignIn</button></NavLink>
                    <NavLink className='border-gray-600 border-l-2' to='/help'><button className='bg-white font-bold px-2 py-1 rounded-r-lg '>Help</button></NavLink>
                    </div>
                </div>   
            </div>                  
        // </nav>
    )
}

export default Navbar