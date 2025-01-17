import React, { useContext } from "react";
import Header from "./../../components/header/Header";
import { RecipeContext } from "../../context/RecipeProvider";
import RecipeCard from "./RecipeCard";
import Cooker from "../../assets/home.svg";

const Home = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <div>
      <Header />

      {recipes.length > 0 ? <RecipeCard /> : <img src={Cooker} alt="" />}

      {/* {recipes.map((item) => (
        <div>
          <p>{item.recipe.label}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Home;
