import React from "react";
import { Redirect, Route } from "react-router-dom";
import { auth } from "../utils/auth";

export function PrivateRoute({ Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        // localStorage.getItem("token") ? (
        auth.isAuthenticated ? (
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
