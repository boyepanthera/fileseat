import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

export function PrivateRoute({ Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export class Auth extends Component {
  render() {
    return <h1>Hello Guys</h1>;
  }
}
