import React, { lazy, Suspense } from "react";
import "./scss/style.scss";
import Loader from "./components/loader";
const Dashboard = lazy(() =>
  import(/*webpackChunkName:"dashboard"*/ "./components/dashboard")
);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Dashboard />
    </Suspense>
  );
};

export default App;
