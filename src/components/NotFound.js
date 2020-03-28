import React from 'react';
import { ResetNavbar } from './Navbar';
import PageNotFound from '../assets/images/notfound.svg';

export const NotFound = () => (
    <div className='m-0 bg-gray-300 h-screen py-8 px-4 sm:p-12'>
        <ResetNavbar/>
        <div className='py-16 m-4 sm:py-20 sm:m-20'>
            <div className='text-center text-semibold text-base  font-semibold sm:text-3xl'>Ooops! Even we are looking for this page.</div>
            <img src={PageNotFound}  className='mx-auto  w-1/3 p-12 h-1/4' alt='Error 404, Page not found illustration' />
        </div>
    </div>
)