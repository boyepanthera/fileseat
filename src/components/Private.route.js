import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "./Home";

export function PrivateRoute({ component: Component, ...rest }) {
  const { state: authState } = useContext(AuthContext);
  console.log(authState)
  return (
    <Route
      {...rest}
      render={props =>
        authState.isAuthenticated ? (
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
