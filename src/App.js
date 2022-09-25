import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="calculator-grid">
      {/* ^^ This is for the grid of the calculator ^^ */}
      <div className="output">
        {/* ^^ This is for the output of the calculator ^^*/}
        <div className="previous-operand"></div>
        <div className="current-operand"></div>
      </div>
      {/* Row 1 of calculator  */}
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>÷</button>
      {/* Row 2 of calculator  */}
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      {/* Row 3 of calculator  */}
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      {/* Row 4 of calculator  */}
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      {/* Row 5 of calculator  */}
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
