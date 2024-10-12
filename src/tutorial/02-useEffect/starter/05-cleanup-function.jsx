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
    console.log('this is interesting');
    const intId = setInterval(() => {
      console.log('hello from interval');
    }, 1000);
    // This is a cleanup function
    return () => {
      clearInterval(intId);
    };
  }, []);
  return (
    <div>
      <h2>Hello Robert</h2>
    </div>
  );
};

export default CleanupFunction;
