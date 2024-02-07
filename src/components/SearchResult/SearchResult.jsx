import React from "react";

function SearchResult({ list }) {
  return (
    <div className="search__item-wrapper">
      <pre>{JSON.stringify(list, null, 2)}</pre>
      {/* {list.map((elem) => {
        <div>
          <div className="search__item-img-container">
            <img
              src={elem.strMealThumb}
              alt="image"
              className="search__item-img"
            />
          </div>
          <div className="search__item-meal-info">
            <h1 className="search__item-meal-title">{elem.strMeal}</h1>
            <p className="search__item-meal-description">
              {elem.strCategory} | {elem.strArea}
            </p>
          </div>
        </div>;
      })} */}
    </div>
  );
}

export default SearchResult;
