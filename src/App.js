import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Results from "./Results/Results";
import SearchForm from "./SearchForm/SearchForm";
import SingleMovie from "./SingleMovie/SingleMovie";

function App() {
  const [searchParameter, setSearchParameter] = useState("batman");

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SearchForm setSearchParameter={setSearchParameter} />
          <Results searchParameter={searchParameter} />
        </Route>
        <Route path="/movie/:id">
          <SingleMovie />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
