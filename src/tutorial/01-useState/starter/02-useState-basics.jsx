import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleCountReset = () => {
    setCount(0)
  }

  const handleSkipCount = () => {
    setCount(count + 10)
  }
  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>Click me</button>
      <button type="button" className="btn" onClick={handleSkipCount}>Add 10</button>
      <button type="button" className="btn" onClick={handleCountReset}>Start over</button>
    </div>
  );
};

export default UseStateBasics;
