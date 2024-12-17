import { createContext, useState } from "react";
import axios from "axios";

const APP_ID = "58c5091b";
const APP_KEY = "9ced208298cb1fd453c44d6655f88efb";

//! context alanı create edelim:

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  //! Home, header, recipecard da gerekli olan veriler:

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("Breakfast");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

  //! Diger bölümlerde kullanilacak degiskenler:

  const [name, setName] = useState(localStorage.getItem("username") || "");

  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );

  //! Verinin cekildigi bölüm:

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setRecipes(data.hits);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return <p>Something went wrong</p>;
  }

  if (loading) {
    return <p>...LOADING...</p>;
  }

  return (
    <RecipeContext.Provider
      value={{
        name,
        setName,
        password,
        setPassword,
        query,
        setQuery,
        mealType,
        setMealType,
        getData,
        recipes,
        setRecipes,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
