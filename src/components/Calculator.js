import React from "react";
import NumberButton from "./NumberButton";
import FunctionButton from "./FunctionButton";
import ClearButton from "./ClearButton";
import Display from "./Display";
import EqualButton from "./EqualButton";
import PercentButton from "./PercentButton";
import NegativeButton from "./NegativeButton";
import { CalculatorStyles } from "./styles/Styles";

const Calculator = () => (
  <CalculatorStyles>
    <div className="calculator">
      <div className="top">16:04</div>
      <div className="result">
        <Display />
      </div>

      <div className="buttons">
        <ClearButton />
        <NegativeButton />
        <PercentButton />
        <FunctionButton buttonValue="÷" />

        <NumberButton buttonValue={7} />
        <NumberButton buttonValue={8} />
        <NumberButton buttonValue={9} />
        <FunctionButton buttonValue="×" />

        <NumberButton buttonValue={4} />
        <NumberButton buttonValue={5} />
        <NumberButton buttonValue={6} />
        <FunctionButton buttonValue="-" />

        <NumberButton buttonValue={1} />
        <NumberButton buttonValue={2} />
        <NumberButton buttonValue={3} />
        <FunctionButton buttonValue="+" />

        <NumberButton buttonValue={0} />
        <NumberButton buttonValue="." />
        <EqualButton />
      </div>
    </div>
  </CalculatorStyles>
);

export default Calculator;
