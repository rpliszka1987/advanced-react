import { useState, useEffect } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h4>Cleanup function</h4>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      // somelogic
    };
    // Adds event listiner
    window.addEventListener('scroll', someFunc);
    // Removes the event listener
    return () => {
      window.removeEventListener('scroll', someFunc);
    };
  }, []);
  return (
    <div>
      <h2>Hello Robert</h2>
    </div>
  );
};

export default CleanupFunction;
