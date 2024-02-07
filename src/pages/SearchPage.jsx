import "./page-setting.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useMealsFind from "../hooks/useMealsFind";
import SearchResult from "../components/SearchResult/SearchResult";
import { fetchSearchByName } from "../store/slices/searchByNameSlice";

function SearchPage() {
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.searchByName);
  const [searchTerm, setSearchTerm] = useState("");
  const { list } = useMealsFind(meals, searchTerm);

  useEffect(() => {
    dispatch(fetchSearchByName(searchTerm));
  }, [dispatch, searchTerm]);

  const handleSearchTerm = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch(setSearchTerm(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearchByName(searchTerm));
  };

  return (
    <div className="search-wrapper">
      <h2 className="static__title">Find your Meal</h2>
      <form className="search-block section-style" onSubmit={handleSubmit}>
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearchTerm}
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
