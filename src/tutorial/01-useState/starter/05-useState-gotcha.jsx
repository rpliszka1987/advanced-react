import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0)
  const handleIncrease = () => {
    setCount(count + 1)
  }
  return (
    <>
    {console.log(count)}
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleIncrease}>Increase</button>
    </>
  )
};

export default UseStateGotcha;
