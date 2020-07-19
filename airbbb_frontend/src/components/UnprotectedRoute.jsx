//Redirects user away from route if logged in
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthConsumer } from "../context/AuthContext";

const UnprotectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isAuth }) => (
      <Route
        render={(props) =>
          !isAuth ? <Component {...props} /> : <Redirect to="/" />
        }
        {...rest}
      />
    )}
  </AuthConsumer>
);

export default UnprotectedRoute;
