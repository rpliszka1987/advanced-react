import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0)
  const handleIncrease = () => {
    setCount((currentState) => {
      const newState = currentState + 1;
      return newState
      
    })
    // console.log(count)
  }
  return (
    <>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleIncrease}>Increase</button>
    </>
  )
};

export default UseStateGotcha;
