import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "Delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "0" && state.currentOperand === "0") return state; //Makes sure to not have more than one 0 as a beginning entry
      if (payload.digit === "." && state.currentOperand.includes("."))
        return state; //Makes sure not to add more periods in the output

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator-grid">
      {/* ^^ This is for the grid of the calculator ^^ */}
      <div className="output">
        {/* ^^ This is for the output of the calculator ^^*/}
        <div className="previous-operand">
          {previousOperand}*{operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      {/* Row 1 of calculator  */}
      <button className="span-two">AC</button>
      <button>DEL</button>
      <OperationButton operation="÷" dispatch={dispatch} />
      {/* Row 2 of calculator  */}
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      {/* Row 3 of calculator  */}
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      {/* Row 4 of calculator  */}
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      {/* Row 5 of calculator  */}
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
