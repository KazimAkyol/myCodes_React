import React, { useContext } from "react";
import { RecipeContext } from "../../context/RecipeProvider";
import {
  MainContainer,
  Cards,
  RecipeHeader,
  RecipeImage,
  RecipeButton,
} from "./HomeStyles";

const RecipeCard = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <MainContainer>
      {recipes.map(({ recipe }, index) => (
        <Cards key={index}>
          <RecipeHeader>{recipe.label}</RecipeHeader>
          <RecipeImage src={recipe.image} />
          <RecipeButton onClick={()=>navigate("/details"), (state:{recipes})} >Details</RecipeButton>
        </Cards>
      ))}
    </MainContainer>
  );
};

export default RecipeCard;
