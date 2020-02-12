import React from 'react';
import Fileseat from './Fileseat';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../assets/css/Home.css';
import {Signup} from './Signup';
import {AdminDashboard, UserDashboard} from './Dashboard';
import {NotFound} from './NotFound';
import {PrivateRoute} from '../utils/auth'

const Home = ()=> {
    return (
      <>
      <Router>
      <div  className='h-full'>
          <Switch>
            <Route exact path ='/' component={Fileseat} />         
            <Route path ='/auth' component={Login} />         
            <Route path ='/newauth' component={Signup} />
            <Route path='/user' component={UserDashboard} />
            <PrivateRoute path='/admin' component={AdminDashboard} />
            {/* <Route path='/admin' component={AdminDashboard} />    */}
            <Route path='*' component={NotFound} />
          </Switch>
       </div>       
      </Router>
      </>
    )
}

export default Home;