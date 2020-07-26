import styled from "styled-components";

export const CalculatorStyles = styled.div`
  .calculator {
    background: black;
    width: 300px;
    height: 530px;
    border-radius: 30px;
    padding: 10px;
  }

  .top {
    height: 30px;
    color: white;
    text-align: center;
    font-size: 15px;
  }

  .result {
    color: white;
    font-size: 40px;
    text-align: right;
    h2 {
      margin-bottom: 10px;
      font-weight: 300;
    }
  }

  .buttons {
    display: grid;
    grid-gap: 5px;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(4, 1fr);
  }

  .zero {
    width: 140px;
    grid-column: 1 / 3;
    border-radius: 60px;
    text-align: left;
    padding-left: 25px;
  }
`;
