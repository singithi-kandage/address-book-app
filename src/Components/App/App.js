import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.scss";

import Header from "../../Shared/Header/Header";
import PersonTable from "../PersonTable/PersonTable";
import PersonDetails from "../PersonDetails/PersonDetails";

function App() {
  const person = useSelector(state => state.person);

  return (
    <div className="app">
      <Header headerText={"Address Book App"} />

      <main className="main">
        <Switch>
          <Route exact path="/" component={PersonTable} />
          <Route
            path="/details"
            render={() =>
              person.firstName !== "" ? <PersonDetails /> : <Redirect to="/" />}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
