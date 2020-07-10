import React from "react";
import styled, { css } from "styled-components";

const BuildControl = (props) => (
  <BuildControlStyled>
    <Label>{props.label}</Label>
    <ControlButton disabled={props.disabled} less onClick={props.removed}>
      LESS
    </ControlButton>
    <ControlButton more onClick={props.added}>
      MORE
    </ControlButton>
  </BuildControlStyled>
);

const BuildControlStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

const ControlButton = styled.button`
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  outline: none;
  cursor: pointer;
  :first-letter {
    text-transform: capitalize;
  }

  ${(props) =>
    props.less &&
    css`
      background-color: #d39952;
      color: white;
      :hover {
        background-color: #daa972;
        color: white;
      }
    `}
  ${(props) =>
    props.more &&
    css`
      background-color: #8f5e1e;
      color: white;
      :hover {
        background-color: #99703f;
        color: white;
      }
    `}
    
  ${(props) =>
    props.disabled &&
    css`
      background-color: #ac9980;
      color: #ccc;
      border: 1px solid #7e7365
      cursor: default;
      :hover {
        background-color: #ac9980;
        color: #ccc;
        cursor: not-allowed;
      }
    `}

`;

const Label = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
  :first-letter {
    text-transform: capitalize;
  }
`;

export default BuildControl;
