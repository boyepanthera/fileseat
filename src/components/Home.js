import React from 'react';
import SharingForm from '../components/SharingForm';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Home = ()=> {
    return (
      <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path ='/' component={SharingForm} />         
        </Switch>
      </Router>
      </>
    )
}

export default Home;