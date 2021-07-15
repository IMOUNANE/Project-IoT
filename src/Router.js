import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";

//Component
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Dashboard from "./components/Dashboard/Dashboard";
import PageTest from "./components/PageTest/PageTest";


function Router() {
  const template = () => {
    return (
      <div>
        <Header/>
        <Menu  />
      </div>
    );
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={()=>(
            <div>
              {template()}
              <PageTest/>
            </div>
          )}
        />
        <Route
          exact
          path="/dashboard"
          render={()=>(
            <div>
              {template()}
              <Dashboard/>
            </div>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
