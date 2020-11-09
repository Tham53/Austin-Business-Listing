import React from "react";
import Login from "./containers/Login";
import AddListing from "./containers/AddListing";
import Details from "./containers/Details";
import Listing from "./containers/Listing";
import { Switch, Route, Redirect } from "react-router";
import { checkAuth } from "./checkAuth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Listing} />
      <Route path="/details/:id" component={Details} />
      <ProtectedRoute path="/add" component={AddListing} />
    </Switch>
  );
};

export default Router;