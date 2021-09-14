import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Results from "./Results/Results";
import SearchForm from "./SearchForm/SearchForm";

function App() {
  const [searchParameter, setSearchParameter] = useState("batman");

  // handle the inputs entered by the users
  const handleOnSubmit = (e, input, setInput) => {
    e.preventDefault();
    setSearchParameter(input);

    // Clear the search form input
    setInput("");
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SearchForm handleOnSubmit={handleOnSubmit} />
          <Results searchParameter={searchParameter} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
