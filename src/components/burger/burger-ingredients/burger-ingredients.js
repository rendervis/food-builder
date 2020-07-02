import React from "react";
import styled from "styled-components";

const BurgerIngredient = (props) => {
  let ingredient = null;
  switch (props.type) {
    case "bread-bottom":
      ingredient = <BreadBottom></BreadBottom>;
      break;
    case "bread-top":
      ingredient = (
        <BreadTop>
          <Seeds1></Seeds1>
          <Seeds2></Seeds2>
        </BreadTop>
      );
      break;
    case "meat":
      ingredient = <Meat></Meat>;
      break;
    case "cheese":
      ingredient = <Cheese></Cheese>;
      break;
    case "salad":
      ingredient = <Salad></Salad>;
      break;
    case "bacon":
      ingredient = <Bacon></Bacon>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

const BreadBottom = styled.div`
  height: 13%;
  width: 80%;
  background: linear-gradient(#f08e4a, #e27b36);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px #c15711;
  margin: 2% auto;
`;

const BreadTop = styled.div`
  height: 20%;
  width: 80%;
  background: linear-gradient(#bc581e, #e27b36);
  border-radius: 50% 50% 0 0;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
  position: relative;
`;

const Seeds1 = styled.div`
  width: 10%;
  height: 15%;
  position: absolute;
  background-color: white;
  left: 30%;
  top: 50%;
  border-radius: 40%;
  transform: rotate(-20deg);
  box-shadow: inset -2px -3px #c9c9c9;
`;

const Seeds2 = styled.div`
  width: 10%;
  height: 15%;
  position: absolute;
  background-color: white;
  left: 64%;
  top: 50%;
  border-radius: 40%;
  transform: rotate(10deg);
  box-shadow: inset -3px 0 #c9c9c9;
`;

const Meat = styled.div`
  width: 80%;
  height: 8%;
  background: linear-gradient(#7f3608, #702e05);
  margin: 2% auto;
  border-radius: 15px;
`;
const Cheese = styled.div`
  width: 90%;
  height: 4.5%;
  margin: 2% auto;
  background: linear-gradient(#f4d004, #d6bb22);
  border-radius: 20px;
`;

const Salad = styled.div`
  width: 85%;
  height: 7%;
  margin: 2% auto;
  background: linear-gradient(#228c1d, #91ce50);
  border-radius: 20px;
`;

const Bacon = styled.div`
  width: 80%;
  height: 3%;
  background: linear-gradient(#bf3813, #c45e38);
  margin: 2% auto;
`;

export default BurgerIngredient;
