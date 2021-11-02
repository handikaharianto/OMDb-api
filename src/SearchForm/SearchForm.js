import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ setSearchParameter }) => {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setSearchParameter(input);
    setInput("");
  }

  function handleInputChange(e) {
    const inputValue = e.target.value;
    setInput(inputValue);
  }

  return (
    <section className="section-search-form">
      <form className="search-form section-center" onSubmit={handleSubmit}>
        <h1>search movies</h1>
        <input
          className="search-form__input"
          type="text"
          placeholder="Enter movie name..."
          name="movie"
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </section>
  );
};

export default SearchForm;
