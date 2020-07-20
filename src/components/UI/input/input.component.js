import React from "react";
import styled from "styled-components";

const Input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <InputElementStyled
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <TextElementStyled
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <SelectElementStyled value={props.value} onChange={props.changed}>
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </SelectElementStyled>
      );
      break;
    default:
      inputElement = (
        <InputElementStyled
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <InputStyled>
      <LabelStyled>{props.label}</LabelStyled>
      {inputElement}
    </InputStyled>
  );
};

const InputStyled = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const LabelStyled = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

const InputElementStyled = styled.input`
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;

  :focus {
    outline: none;
    background-color: #ccc;
  }
`;
const TextElementStyled = styled.textarea`
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;

  :focus {
    outline: none;
    background-color: #ccc;
  }
`;
const SelectElementStyled = styled.select`
  outline: none;
  border: 1px solid #ccc;
  background-color: white;
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;

  :focus {
    outline: none;
    background-color: #ccc;
  }
`;

export default Input;
