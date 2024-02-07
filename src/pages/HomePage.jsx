import "./page-setting.css";

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomMeal } from "../store/slices/randomMealSlice";
import SearchPage from "./SearchPage";

function HomePage() {
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.randomMeal);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchRandomMeal());
  }, [id, dispatch]);

  return (
    <div className="home-page pages">
      <h2 className="static__title">Meal of the Day</h2>
      {meals.map((elem) => (
        <div key={elem.idMeal}>
          <section className="products-wrapper">
            <div className="title-block">
              <Link className="link" to={`/products/${elem.idMeal}`}>
                <h1 className="random-generate__title">{elem.strMeal}</h1>
              </Link>
              <div className="subtitle">
                <span className="subtitle-category">
                  <pre>
                    {elem.strCategory} || {elem.strArea}
                  </pre>
                </span>
                <div className="ingredients"></div>
              </div>
            </div>
            <div className="meal-img-block">
              <img className="img" src={elem.strMealThumb} alt="" />
            </div>
          </section>
          <SearchPage />
        </div>
      ))}
    </div>
  );
}

export default HomePage;
