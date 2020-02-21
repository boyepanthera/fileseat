import React from "react";
import { Redirect, Route } from "react-router-dom";
// import { AuthContext } from "./Home";

export function PrivateRoute({ component: Component, ...rest }) {
  const token = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/auth",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}
