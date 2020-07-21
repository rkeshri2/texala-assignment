import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "./components/loader";
const Dashboard = lazy(() =>
  import(/*webpackChunkName:"dashboard"*/ "./components/dashboard")
);

const Routes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
