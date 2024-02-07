import { useMemo } from "react";

export function useIngredients(meals) {
  const ingredients = useMemo(() => {
    const result = {};
    for (const product of meals) {
      result[product.idMeal] = Object.keys(product)
        .filter(
          (key) =>
            key.includes("strIngredient") &&
            // || (key.includes("strMeasure")
            Boolean(product[key])
        )

        .map((key) => product[key]);
    }
    return result;
  }, [meals]);
  return ingredients;
}
