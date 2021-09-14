import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ handleOnSubmit }) => {
  const [input, setInput] = useState("");

  return (
    <section className="section-search-form">
      <form
        className="search-form section-center"
        onSubmit={(e) => handleOnSubmit(e, input, setInput)}
      >
        <h1>search movies</h1>
        <input
          className="search-form__input"
          type="text"
          placeholder="Enter movie name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </section>
  );
};

export default SearchForm;
