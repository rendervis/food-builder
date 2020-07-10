import React from "react";
import styled, { css } from "styled-components";

const Modal = (props) => (
  <ModalStyled noShow={!props.show}>{props.children}</ModalStyled>
);

const ModalStyled = styled.div`
  position: fixed;
  z-index: 101;
  background-color: white;
  width: 40%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  top: 30%;
  left: 30%;
  align-self: center;
  box-sizing: border-box;
  transition: all 0.3s ease-out;

  ${(props) =>
    props.noShow &&
    css`
      transform: translateY(-100vh);
      opacity: "0";
    `};

  @media (mind-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;

export default Modal;
