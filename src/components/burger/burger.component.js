import React from "react";
import styled from "styled-components";
import BurgerIngredient from "./burger-ingredients/burger-ingredients";

const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map(
    (ingredientsKey) => {
      return [...Array(props.ingredients[ingredientsKey])].map((_, i) => {
        console.log(ingredientsKey + i);
        return (
          <BurgerIngredient key={ingredientsKey + i} type={ingredientsKey} />
        );
      });
    }
  );
  console.log(transformedIngredients);
  return (
    <BurgerStyled>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </BurgerStyled>
  );
};

const BurgerStyled = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350;
    height: 300px;
  }
  @media (min-width: 500px) and (min-height: 401px) {
    width: 450;
    height: 400px;
  }
  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
`;

export default Burger;
