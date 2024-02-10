import { configureStore } from "@reduxjs/toolkit";
import { randomMealReducer } from "./slices/randomMealSlice";
import { detailsMealReducer } from "./slices/detailsMealSlice";

const store = configureStore({
  reducer: {
    randomMeal: randomMealReducer,
    detailsMeal: detailsMealReducer,
  },
});
export default store;
