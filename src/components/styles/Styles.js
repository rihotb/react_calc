import styled from "styled-components";

export const CalculatorStyles = styled.div`
  .calculator {
    background: black;
    width: 250px;
  }

  .result {
    height: 100px;
    color: white;
    font-size: 35px;
    text-align: right;
    padding-right: 10%;
    h2 {
      padding-top: 20%;
      font-weight: lighter;
    }
  }

  .zero {
    display: inline-block;
    width: 120px;
  }
`;
