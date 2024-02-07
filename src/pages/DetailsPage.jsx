import "./page-setting.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailsMeal } from "../store/slices/detailsMealSlice";

import { useIngredients } from "../hooks/useIngredients";

function DetailsPage() {
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.randomMeal);

  const ingredients = useIngredients(meals);

  useEffect(() => {
    dispatch(fetchDetailsMeal());
  }, [dispatch]);

  useEffect(() => {}, [meals]);

  return (
    <div className="product-page pages">
      {meals.map((elem) => (
        <section className="products-wrapper" key={elem.idMeal}>
          <div className="title-block">
            <h1 className="random-generate__title">{elem.strMeal}</h1>
            <div className="subtitle">
              <span className="subtitle-category">
                <pre>
                  {elem.strCategory} || {elem.strArea}
                </pre>
              </span>
              <ul className="ingredients">
                {ingredients[elem.idMeal].map((ingredient, index) => (
                  <li key={ingredient.title + index}>
                    {ingredient.title} <strong>{ingredient.measure}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="meal-img-block">
            <img className="img" src={elem.strMealThumb} alt="" />
          </div>
          <div className="instruction">
            <h2 className="static__title">Instruction</h2>
            <div className="meal-description">{elem.strInstructions}</div>
            <a
              className="meal-youtube"
              target="_blank"
              rel="noreferrer"
              href={elem.strYoutube}
            >
              Watch on YouTube
            </a>
          </div>
        </section>
      ))}
    </div>
  );
}

export default DetailsPage;
