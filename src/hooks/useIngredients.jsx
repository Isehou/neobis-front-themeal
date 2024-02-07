import { useMemo } from "react";

export function useIngredients(meals) {
  const ingredients = useMemo(() => {
    const result = {};
    for (const product of meals) {
      result[product.idMeal] = Object.keys(product)
        .filter((key) => key.includes("strIngredient") && Boolean(product[key]))

        .map((key, i) => {
          const measure = product[`strMeasure${i + 1}`];
          return { title: product[key], measure };
        });
    }
    return result;
  }, [meals]);
  return ingredients;
}
