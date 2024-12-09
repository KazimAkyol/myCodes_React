import React, { useContext } from 'react'
import { RecipeContext } from '../../context/RecipeProvider'
import MainContainer, { Cards } from "./HomeStyles";

const RecipeCard = () => {

    const {recipes}=useContext(RecipeContext)

  return (
    <MainContainer>
    {
        recipes.map((recipe,index)=>(
            <Cards>
            
            </Cards>
        ))
    }
    </MainContainer>
  )
}

export default RecipeCard