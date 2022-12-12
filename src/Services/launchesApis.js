const API_URL_LETTER = "https://www.themealdb.com/api/json/v1/1/search.php?f=";
const API_URL_ID= "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const API_URL_RANDOM= "https://www.themealdb.com/api/json/v1/1/random.php";
const API_URL_CATEGORY= "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
//by name www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
//List all meal categories www.themealdb.com/api/json/v1/1/categories.php
/*List all Categories, Area, Ingredients
    www.themealdb.com/api/json/v1/1/list.php?c=list
    www.themealdb.com/api/json/v1/1/list.php?a=list
    www.themealdb.com/api/json/v1/1/list.php?i=list*/
// main ingredient www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
// Category www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
//Area www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

export async function getLauncheByLetter(Letter) {
  try {
    const response = await fetch(`${API_URL_LETTER}${Letter}`);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error(error);
  }
}

export async function getLauncheByCategory(Text) {
  try {
    const response = await fetch(`${API_URL_CATEGORY}${Text}`);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error(error);
  }
}

export async function getLauncheById(Number) {
  try {
    const response = await fetch(`${API_URL_ID}${Number}`);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error(error);
  }
}

export async function getLauncheRandom() {
  try {
    const response = await fetch(`${API_URL_RANDOM}`);
    const data = await response.json();
    return data.meals[0];
  } catch (error) {
    console.error(error);
  }
}