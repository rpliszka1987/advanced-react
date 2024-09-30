import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0)
  const handleIncrease = () => {
    setTimeout(() => {
      setCount((currentState) => {
        return currentState + 1
      })
    }, 3000)
  }
  return (
    <>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleIncrease}>Increase</button>
    </>
  )
};

export default UseStateGotcha;
