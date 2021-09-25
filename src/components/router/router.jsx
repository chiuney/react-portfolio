import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../templates/DefaultLayout"
// import { HeaderOnly } from "../templates/HeaderOnly"
import { Skill } from "../pages/Skill";
import { History } from "../pages/History";
import { Home } from "../pages/Home";
import { Personality } from "../pages/Personality";
import { Products } from "../pages/Products";
import { Contact } from "../pages/Contact";

export const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Home></Home>
          </DefaultLayout>
        </Route>
        <Route exact path="/skill">
          <DefaultLayout>
            <Skill></Skill>
          </DefaultLayout>
        </Route>
        <Route exact path="/history">
          <DefaultLayout>
            <History></History>
          </DefaultLayout>
        </Route>
        <Route exact path="/personality">
          <DefaultLayout>
            <Personality></Personality>
          </DefaultLayout>
        </Route>
        <Route exact path="/products">
          <DefaultLayout>
            <Products></Products>
          </DefaultLayout>
        </Route>
        <Route exact path="/contact">
          <DefaultLayout>
            <Contact></Contact>
          </DefaultLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}