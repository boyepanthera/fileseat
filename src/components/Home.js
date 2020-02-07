import React from 'react';
import Fileseat from './Fileseat';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../assets/css/Home.css';
import {Signup} from './Signup';

const Home = ()=> {
    return (
      <>
      <Router>
      <div  className='h-full'>
          <Switch>
            <Route exact path ='/' component={Fileseat} />         
            <Route path ='/auth' component={Login} />         
            <Route path ='/newauth' component={Signup} />         
          </Switch>
       </div>       
      </Router>
      </>
    )
}

export default Home;