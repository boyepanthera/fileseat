import React from 'react';
import SharingForm from '../components/SharingForm';
// import Navbar from './Navbar';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../assets/css/Home.css';

const Home = ()=> {
    return (
      <>
      <Router>
      <div  className='h-full'>
        {/* <Navbar/> */}
          <Switch>
            <Route exact path ='/' component={SharingForm} />         
            <Route path ='/auth' component={Login} />         
          </Switch>
       </div>       
      </Router>
      </>
    )
}

export default Home;