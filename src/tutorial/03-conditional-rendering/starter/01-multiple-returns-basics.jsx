import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  // set state for boolean
  const [isLoading, setIsLoading] = useState(true);

  // Set timeout to load data
  useEffect(() => {
    setTimeout(() => {
      // change the boolean value to display
      setIsLoading(false);
    }, 5000);
  }, []);

  // Conditional rendering
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
