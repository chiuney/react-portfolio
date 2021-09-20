import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../templates/DefaultLayout"
import { HeaderOnly } from "../templates/HeaderOnly"
// import { About } from "../pages/About";
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
        {/* <Route exact path="/about">
          <HeaderOnly>
            <About></About>
          </HeaderOnly>
        </Route> */}
        <Route exact path="/carrer">
          <HeaderOnly>
            <Carrer></Carrer>
          </HeaderOnly>
        </Route>
        <Route exact path="/personality">
          <HeaderOnly>
            <Personality></Personality>
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}