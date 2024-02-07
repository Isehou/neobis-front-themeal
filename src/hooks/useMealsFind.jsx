import React, { useEffect, useState } from "react";

function useMealsFind(meals, filter) {
  const [list, setList] = useState(meals);

  useEffect(() => {
    setList(
      meals.filter(
        (e) =>
          typeof e.title === "string" &&
          e.title.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [meals, filter]);

  return { list };
}

export default useMealsFind;
