import React from 'react';
import { NavbarColor } from './Navbar';
import PageNotFound from '../assets/images/notfound.svg';

const styles = {
    errImage: {
        height: '400px',
        width: '600px'
    }
}

export const NotFound = () => (
    <div className='m-0 bg-gray-300 h-full py-8 px-4 sm:p-12'>
        <NavbarColor />
        <div className='py-16 m-4 sm:py-20 sm:m-20'>
            <div className='text-center text-semibold text-3xl font-semibold sm:text-6xl'>Ooops! Even we are looking for this page.</div>
            <img src={PageNotFound} styles={styles.errImage} className='mx-auto p-12 h-64' alt='Error 404, Page not found illustration' />
        </div>

    </div>
)