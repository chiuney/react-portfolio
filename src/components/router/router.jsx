import { Route, Switch } from "react-router";
import { About } from "../pages/About";
import { Carrer } from "../pages/Carrer";
import { Home } from "../pages/Home";

export const Router = () => {
  return(
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/about">
        <About></About>
      </Route>
      <Route exact path="/carrer">
        <Carrer></Carrer>
      </Route>
    </Switch>
  );
}