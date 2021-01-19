import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import * as brand from "../../Assets/address-book-icon.png";

import Header from "../../Shared/Header/Header";
import PersonTable from "../PersonTable/PersonTable";
import PersonDetails from "../PersonDetails/PersonDetails";

function App() {
  return (
    <div className="app">
      <Header brandImage={brand} headerText={"Address Book App"} />

      <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <PersonTable />
            </Route>
            <Route path="/details">
              <PersonDetails />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
