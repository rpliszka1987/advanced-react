const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count)
  }

  return (
    <>
      <h2>{count}</h2>
      <button type="button" onClick={handleClick}>Click</button>
    </>
  )
   
  
};

export default ErrorExample;
