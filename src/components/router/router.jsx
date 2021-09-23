import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../templates/DefaultLayout"
import { HeaderOnly } from "../templates/HeaderOnly"
import { About } from "../pages/About";
import { Carrer } from "../pages/Carrer";
import { Home } from "../pages/Home";
import { Personality } from "../pages/Personality";

export const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Home></Home>
          </DefaultLayout>
        </Route>
        <Route exact path="/about">
          <DefaultLayout>
            <About></About>
          </DefaultLayout>
        </Route>
        <Route exact path="/carrer">
          <DefaultLayout>
            <Carrer></Carrer>
          </DefaultLayout>
        </Route>
        <Route exact path="/personality">
          <DefaultLayout>
            <Personality></Personality>
          </DefaultLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}