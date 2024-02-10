import React from "react";
import { Link } from "react-router-dom";

import "./search-result.css";

function SearchResult({ list }) {
  return (
    <div className="search__result">
      {/* <pre>{JSON.stringify(list, null, 2)}</pre> */}
      <div className="search__list">
        {list.map((elem) => {
          return (
            <div className="search__item-wrapper" key={elem.idMeal}>
              <Link className="link" to={`/products/${elem.idMeal}`}>
                <div className="search__item-img-wrapper">
                  <img
                    src={elem.strMealThumb}
                    alt="image"
                    className="search__item-img"
                  />
                </div>
                <div className="search__item-meal-info">
                  <h3 className="search__item-meal-title">{elem.strMeal}</h3>
                  <p className="search__item-meal-description">
                    {elem.strCategory} | {elem.strArea}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchResult;
