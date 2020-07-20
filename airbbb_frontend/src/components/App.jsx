import React from "react";
import { Route, Switch } from "react-router-dom";
import Airlines from "./Airlines/Airlines";
import Airline from "./Airline/Airline";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import UnprotectedRoute from "./UnprotectedRoute";
import { AuthProvider } from "../context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/" component={Airlines} />
        <Route exact path="/airlines/:slug" component={Airline} />
        <UnprotectedRoute exact path="/login" component={Login} />
        <UnprotectedRoute exact path="/register" component={Register} />
      </Switch>
    </AuthProvider>
  );
};

export default App;
