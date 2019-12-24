import React from 'react';
import SharingForm from '../components/SharingForm';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../assets/css/Home.css';

const Home = ()=> {
    return (
      <>
      <Router>
      <div className='container'>
        <Navbar/>
          <Switch>
            <Route exact path ='/' component={SharingForm} />         
          </Switch>
       </div>       
      </Router>
      </>
    )
}

export default Home;