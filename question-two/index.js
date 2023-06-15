function solution(recipes) {
  if (recipes.length > 500 || !recipes.length) return [];
  //建立一個空的物件 , 原料對應的菜名映射表
  const ingredientMap = {};
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    if (recipe.length < 2 || recipe.length > 10) {
      continue;
    }
    const dish = recipe[0];

    if (dish.length > 50 || dish.length < 1) {
      continue;
    }

    const ingredients = recipe.slice(1);

    for (const ingredient of ingredients) {
      if (ingredient.length > 50 || ingredient.length < 1) {
        continue;
      }
      if (!ingredientMap[ingredient]) {
        ingredientMap[ingredient] = [];
      }
      ingredientMap[ingredient].push(dish);
    }
  }

  const sortedIngredients = Object.keys(ingredientMap).sort();

  const result = sortedIngredients
    .map((ingredient) => {
      const dishes = ingredientMap[ingredient].sort();
      return [ingredient, ...dishes];
    })
    //過濾出超過一種以上的菜名,題目要求哪些菜
    .filter((ele) => ele.length > 2);

  return result;
}

// 測試案例
const recipes = [
  ['Salad', 'Tomato', 'Cucumber', 'Salad', 'Sauce'],
  ['Pizza', 'Tomato', 'Sausage', 'Sauce', 'Dough'],
  ['Quesadilla', 'Chicken', 'Cheese', 'Sauce'],
  ['Sandwich', 'Salad', 'Bread', 'Tomato', 'Cheese'],
];

console.log(solution(recipes));
