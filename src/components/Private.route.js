import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "./Home";

export function PrivateRoute({ component: Component, ...rest }) {
  const { state } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props =>
        state.isAuthenticated ? (
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
