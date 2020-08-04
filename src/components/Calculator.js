import React, { useContext } from "react";
import NumberButton from "./NumberButton";
import FunctionButton from "./FunctionButton";
import ClearButton from "./ClearButton";
import Display from "./Display";
import EqualButton from "./EqualButton";
import PercentButton from "./PercentButton";
import NegativeButton from "./NegativeButton";
import Time from "./Time";
import { CalculatorStyles } from "./styles/Styles";
import AllClearButton from "./AllClearButton";
import { NumberContext } from "./NumberProvider";

const Calculator = () => {
  const { useNumberGroup } = useContext(NumberContext);
  const { number } = useNumberGroup;

  return (
    <CalculatorStyles>
      <div className="calculator">
        <div className="top">
          <Time />
        </div>
        <div className="result">
          <Display />
        </div>

        <div className="buttons">
          {number === "" ? <AllClearButton /> : <ClearButton />}
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
};

export default Calculator;
