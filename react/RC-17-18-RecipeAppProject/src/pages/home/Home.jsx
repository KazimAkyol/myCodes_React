import React, { useContext } from "react";
import Header from "./../../components/header/Header";
import { RecipeContext } from "../../context/RecipeProvider";

const Home = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <div>
      <Header />

      {recipes.map((item) => (
        <div>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
