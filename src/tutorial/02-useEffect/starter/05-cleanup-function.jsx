import { useState, useEffect } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h4>Cleanup function</h4>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {console.log(toggle)}
    </div>
  );
};

export default CleanupFunction;
