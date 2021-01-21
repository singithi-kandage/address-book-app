import { Switch, Router, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { createBrowserHistory } from "history";

import "./App.scss";

import Header from "../../Shared/Header/Header";
import PersonTable from "../PersonTable/PersonTable";
import PersonDetails from "../PersonDetails/PersonDetails";

export const history = createBrowserHistory();

export const App = () => {
  const person = useSelector(state => state.person);

  return (
    <div className="app">
      <Header headerText={"Address Book App"} />

      <main className="main">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={PersonTable} />
            <Route
              path="/details"
              render={() =>
                person.firstName !== ""
                  ? <PersonDetails />
                  : <Redirect to="/" />}
            />
          </Switch>
        </Router>
      </main>
    </div>
  );
};
