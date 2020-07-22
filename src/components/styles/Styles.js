import styled from "styled-components";

export const CalculatorStyles = styled.div`
  .calculator {
    background: black;
    width: 250px;
  }
  .result {
    height: 60px;
    color: white;
    font-size: 30px;
    text-align: right;
    margin: 100px 10px 0 0;
  }

  button {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 5px;
    background: #555555;
    border: none;
    color: white;
    font-size: 25px;
  }

  button:hover {
    background: #999999;
  }

  button:focus {
    outline: none;
  }

  .function-button {
    background: orange;
  }

  .function-button:hover {
    background: #ffc7af;
  }

  .function-button:focus {
    background: white;
    color: orange;
  }
`;
/* 
export const DisplayStyles = styled.div`
  display: grid;
  grid-template-rows: 90px 50px;
  grid-template-columns: 1fr;
  border: 4px solid white;
  margin: 10px;
  width: 700px;
  align-items: center;
  border-radius: 20px;
  background: #e17055;
  h2,
  p {
    text-align: center;
    color: white;
  }
  h2 {
    font-size: 3rem;
    margin: 0;
    text-align: right;
    padding: 0px;
    border-bottom: 4px solid white;
    padding: 15px 20px;
  }
  p {
    margin: 5px 0;
  }
`;
 */
