import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/css/Navbar.css';

export const Navbar =  ()=>  {
    return (
        <div className='flex justify-between'>
                <div className='w-1/2'>
                    <NavLink className='text-white font-extrabold tracking-wider text-4xl' to='/'>FS</NavLink>
                </div>
                <div className='w-1/2 mt-4'>
                    <div className='float-right mr-10'>
                    <NavLink className='border-gray-600 border-r-2' to='/about'><button className='bg-white rounded-l-lg font-bold px-2 py-1  '>About</button></NavLink>
                    <NavLink className='' to='/auth'><button className='bg-white font-bold px-2 py-1'>SignIn</button></NavLink>
                    <NavLink className='border-gray-600 border-l-2' to='/help'><button className='bg-white font-bold px-2 py-1 rounded-r-lg '>Help</button></NavLink>
                    </div>
                </div>   
            </div>                  
    )
}

export const RightNavbar = ()=> (
        <div className='float-right mr-10 mt-12'>
            <NavLink className='border-gray-600 border-r-2' to='/about'><button className='bg-white rounded-l-lg font-bold px-2 py-1  '>About</button></NavLink>
            <NavLink className='' to='/auth'><button className='bg-white font-bold px-2 py-1'>SignIn</button></NavLink>
            <NavLink className='border-gray-600 border-l-2' to='/help'><button className='bg-white font-bold px-2 py-1 rounded-r-lg '>Help</button></NavLink>
        </div>
    )

export const LeftNavbar = () => {
    return (
        <div className='w-1/2'>
            <NavLink className='text-purple-900 font-extrabold tracking-wider text-4xl' to='/'>FS</NavLink>
        </div>
    )
}