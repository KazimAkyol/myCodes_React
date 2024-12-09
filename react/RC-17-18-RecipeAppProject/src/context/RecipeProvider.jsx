import { createContext, useState } from "react";

const APP_ID = "bfbb3efc";
const APP_KEY = "43faeee790f26cd82b28050d3031619d";

//!context alanı create edelim:

export const RecipeContext = createContext();

const RecipeProvider = ({children}) => {
  //! Home, header, recipecard da gerekli olan veriler

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("Breakfast");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

  //! Diger bölümlerde kullanilacak degiskenler:

  const [name, setName]=useState(localStorage.getItem("username") || "")

  const [password, setPassword]=useState(localStorage.getItem("password") || "")

  return <RecipeContext.Provider>
  {children}
  </RecipeContext.Provider>;
};

export default RecipeProvider;
