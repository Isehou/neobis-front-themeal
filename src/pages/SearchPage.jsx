import "./page-setting.css";

import React, { useState } from "react";
import useMealsFind from "../hooks/useMealsFind";
import SearchResult from "../components/SearchResult/SearchResult";

function SearchPage() {
  const [filter, setFilter] = useState("");
  const { list, find } = useMealsFind();

  const handleSubmit = (e) => {
    e.preventDefault();
    find(filter);
  };

  return (
    <div className="search-wrapper">
      <h2 className="static__title">Find your Meal</h2>
      <form className="search-block section-style" onSubmit={handleSubmit}>
        <input
          type="search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Find your Meal"
        />
        <button type="submit">Search</button>
      </form>
      <div className="search__result-list">
        <SearchResult list={list} />
      </div>
    </div>
  );
}

export default SearchPage;
