import React from 'react';
import SharingForm from '../components/SharingForm';
import Navbar from './Navbar';
import {Router} from 'react-router-dom';

const Home = ()=> {
    return (
      <>
      <Router>
        <Navbar/>
        <SharingForm/> 
      </Router>
      </>
    )
}

export default Home;