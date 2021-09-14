import { useState } from "react";
import SearchForm from "./SearchForm/SearchForm";

function App() {
  const [searchParameter, setSearchParameter] = useState("");

  // handle the inputs entered by the users
  const handleOnSubmit = (e, input, setInput) => {
    e.preventDefault();
    setSearchParameter(input);

    // Clear the search form input
    setInput("");
  };

  return (
    <>
      <SearchForm handleOnSubmit={handleOnSubmit} />
    </>
  );
}

export default App;
