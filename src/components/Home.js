import React from "react";
import Fileseat from "./Fileseat";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../assets/css/Home.css";
import { Signup } from "./Signup";
import { AdminDashboard, UserDashboard } from "./Dashboard";
import { NotFound } from "./NotFound";
import { PrivateRoute } from "./Private.route";

const Home = () => {
  return (
    <>
      <Router>
        <div className="h-full">
          <Switch>
            <Route exact path="/" component={Fileseat} />
            <Route exact path="/auth" component={Login} />
            <Route exact path="/newauth" component={Signup} />
            <PrivateRoute exact path="/user" component={UserDashboard} />
            <PrivateRoute exact path="/admin" component={AdminDashboard} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default Home;
