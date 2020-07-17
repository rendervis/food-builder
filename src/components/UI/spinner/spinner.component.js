import React from "react";
import styled, { css } from "styled-components";

const Spinner = () => <SpinnerStyled>Loading...</SpinnerStyled>;

const loaderStyle = css`
  @-webkit-keyframes loader {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em #a132a9,
        1.8em -1.8em 0 0em rgba(161, 50, 169, 0.2),
        2.5em 0em 0 0em rgba(161, 50, 169, 0.2),
        1.75em 1.75em 0 0em rgba(161, 50, 169, 0.2),
        0em 2.5em 0 0em rgba(161, 50, 169, 0.2),
        -1.8em 1.8em 0 0em rgba(161, 50, 169, 0.2),
        -2.6em 0em 0 0em rgba(161, 50, 169, 0.5),
        -1.8em -1.8em 0 0em rgba(161, 50, 169, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(161, 50, 169, 0.7),
        1.8em -1.8em 0 0em #a132a9, 2.5em 0em 0 0em rgba(161, 50, 169, 0.2),
        1.75em 1.75em 0 0em rgba(161, 50, 169, 0.2),
        0em 2.5em 0 0em rgba(161, 50, 169, 0.2),
        -1.8em 1.8em 0 0em rgba(161, 50, 169, 0.2),
        -2.6em 0em 0 0em rgba(161, 50, 169, 0.2),
        -1.8em -1.8em 0 0em rgba(161, 50, 169, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(161, 50, 169, 0.5),
        1.8em -1.8em 0 0em rgba(161, 50, 169, 0.7), 2.5em 0em 0 0em #a132a9,
        1.75em 1.75em 0 0em rgba(161, 50, 169, 0.2),
        0em 2.5em 0 0em rgba(161, 50, 169, 0.2),
        -1.8em 1.8em 0 0em rgba(161, 50, 169, 0.2),
        -2.6em 0em 0 0em rgba(161, 50, 169, 0.2),
        -1.8em -1.8em 0 0em rgba(161, 50, 169, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(161, 50, 169, 0.2),
        1.8em -1.8em 0 0em rgba(161, 50, 169, 0.5),
        2.5em 0em 0 0em rgba(161, 50, 169, 0.7), 1.75em 1.75em 0 0em #a132a9,
        0em 2.5em 0 0em rgba(161, 50, 169, 0.2),
        -1.8em 1.8em 0 0em rgba(161, 50, 169, 0.2),
        -2.6em 0em 0 0em rgba(161, 50, 169, 0.2),
        -1.8em -1.8em 0 0em rgba(161, 50, 169, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(161, 50, 169, 0.2),
        1.8em -1.8em 0 0em rgba(161, 50, 169, 0.2),
        2.5em 0em 0 0em rgba(161, 50, 169, 0.5),
        1.75em 1.75em 0 0em rgba(161, 50, 169, 0.7), 0em 2.5em 0 0em #a132a9,
        -1.8em 1.8em 0 0em rgba(161, 50, 169, 0.2),
        -2.6em 0em 0 0em rgba(161, 50, 169, 0.2),
        -1.8em -1.8em 0 0em rgba(161, 50, 169, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(161, 50, 169, 0.2),
        1.8em -1.8em 0 0em rgba(161, 50, 169, 0.2),
        2.5em 0em 0 0em rgba(161, 50, 169, 0.2),
        1.75em 1.75em 0 0em rgba(161, 50, 169, 0.5),
        0em 2.5em 0 0em rgba(161, 50, 169, 0.7), -1.8em 1.8em 0 0em #a132a9,
        -2.6em 0em 0 0em rgba(161, 50, 169, 0.2),
        -1.8em -1.8em 0 0em rgba(161, 50, 169, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(161, 50, 169, 0.2),
        1.8em -1.8em 0 0em rgba(161, 50, 169, 0.2),
        2.5em 0em 0 0em rgba(161, 50, 169, 0.2),
        1.75em 1.75em 0 0em rgba(161, 50, 169, 0.2),
        0em 2.5em 0 0em rgba(161, 50, 169, 0.5),
        -1.8em 1.8em 0 0em rgba(161, 50, 169, 0.7), -2.6em 0em 0 0em #a132a9,
        -1.8em -1.8em 0 0em rgba(161, 50, 169, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(161, 50, 169, 0.2),
        1.8em -1.8em 0 0em rgba(161, 50, 169, 0.2),
        2.5em 0em 0 0em rgba(161, 50, 169, 0.2),
        1.75em 1.75em 0 0em rgba(161, 50, 169, 0.2),
        0em 2.5em 0 0em rgba(161, 50, 169, 0.2),
        -1.8em 1.8em 0 0em rgba(161, 50, 169, 0.5),
        -2.6em 0em 0 0em rgba(161, 50, 169, 0.7), -1.8em -1.8em 0 0em #a132a9;
    }
  }
  @keyframes loader {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em #a132a9,
        1.8em -1.8em 0 0em rgba(161, 50, 169, 0.2),
        2.5em 0em 0 0em rgba(161, 50, 169, 0.2),
        1.75em 1.75em 0 0em rgba(161, 50, 169, 0.2),
        0em 2.5em 0 0em rgba(161, 50, 169, 0.2),
        -1.8em 1.8em 0 0em rgba(161, 50, 169, 0.2),
        -2.6em 0em 0 0em rgba(161, 50, 169, 0.5),
        -1.8em -1.8em 0 0em rgba(161, 50, 169, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(161, 50, 169, 0.7),
        1.8em -1.8em 0 0em #a132a9, 2.5em 0em 0 0em rgba(161, 50, 169, 0.2),
        1.75em 1.75em 0 0em rgba(161, 50, 169, 0.2),
        0em 2.5em 0 0em rgba(161, 50, 169, 0.2),
        -1.8em 1.8em 0 0em rgba(161, 50, 169, 0.2),
        -2.6em 0em 0 0em rgba(161, 50, 169, 0.2),
        -1.8em -1.8em 0 0em rgba(161, 50, 169, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(161, 50, 169, 0.5),
        1.8em -1.8em 0 0em rgba(161, 50, 169, 0.7), 2.5em 0em 0 0em #a132a9,
        1.75em 1.75em 0 0em rgba(161, 50, 169, 0.2),
        0em 2.5em 0 0em rgba(161, 50, 169, 0.2),
        -1.8em 1.8em 0 0em rgba(161, 50, 169, 0.2),
        -2.6em 0em 0 0em rgba(161, 50, 169, 0.2),
        -1.8em -1.8em 0 0em rgba(161, 50, 169, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(161, 50, 169, 0.2),
        1.8em -1.8em 0 0em rgba(161, 50, 169, 0.5),
        2.5em 0em 0 0em rgba(161, 50, 169, 0.7), 1.75em 1.75em 0 0em #a132a9,
        0em 2.5em 0 0em rgba(161, 50, 169, 0.2),
        -1.8em 1.8em 0 0em rgba(161, 50, 169, 0.2),
        -2.6em 0em 0 0em rgba(161, 50, 169, 0.2),
        -1.8em -1.8em 0 0em rgba(161, 50, 169, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(161, 50, 169, 0.2),
        1.8em -1.8em 0 0em rgba(161, 50, 169, 0.2),
        2.5em 0em 0 0em rgba(161, 50, 169, 0.5),
        1.75em 1.75em 0 0em rgba(161, 50, 169, 0.7), 0em 2.5em 0 0em #a132a9,
        -1.8em 1.8em 0 0em rgba(161, 50, 169, 0.2),
        -2.6em 0em 0 0em rgba(161, 50, 169, 0.2),
        -1.8em -1.8em 0 0em rgba(161, 50, 169, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(161, 50, 169, 0.2),
        1.8em -1.8em 0 0em rgba(161, 50, 169, 0.2),
        2.5em 0em 0 0em rgba(161, 50, 169, 0.2),
        1.75em 1.75em 0 0em rgba(161, 50, 169, 0.5),
        0em 2.5em 0 0em rgba(161, 50, 169, 0.7), -1.8em 1.8em 0 0em #a132a9,
        -2.6em 0em 0 0em rgba(161, 50, 169, 0.2),
        -1.8em -1.8em 0 0em rgba(161, 50, 169, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(161, 50, 169, 0.2),
        1.8em -1.8em 0 0em rgba(161, 50, 169, 0.2),
        2.5em 0em 0 0em rgba(161, 50, 169, 0.2),
        1.75em 1.75em 0 0em rgba(161, 50, 169, 0.2),
        0em 2.5em 0 0em rgba(161, 50, 169, 0.5),
        -1.8em 1.8em 0 0em rgba(161, 50, 169, 0.7), -2.6em 0em 0 0em #a132a9,
        -1.8em -1.8em 0 0em rgba(161, 50, 169, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(161, 50, 169, 0.2),
        1.8em -1.8em 0 0em rgba(161, 50, 169, 0.2),
        2.5em 0em 0 0em rgba(161, 50, 169, 0.2),
        1.75em 1.75em 0 0em rgba(161, 50, 169, 0.2),
        0em 2.5em 0 0em rgba(161, 50, 169, 0.2),
        -1.8em 1.8em 0 0em rgba(161, 50, 169, 0.5),
        -2.6em 0em 0 0em rgba(161, 50, 169, 0.7), -1.8em -1.8em 0 0em #a132a9;
    }
  }
`;

const getLoaderStyle = () => {
  return loaderStyle;
};

const SpinnerStyled = styled.div`
  margin: 100px auto;
  font-size: 25px;
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: loader 1.1s infinite ease;
  animation: loader 1.1s infinite ease;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transform: scale(0.47);
  -moz-transform: scale(0.47);
  transform: scale(0.47);
  ${getLoaderStyle}
`;

export default Spinner;
