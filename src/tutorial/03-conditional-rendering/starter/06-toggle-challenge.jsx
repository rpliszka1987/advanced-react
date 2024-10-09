import { useState } from 'react';

const ToggleChallenge = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h1>Welcome</h1>
      <button className='btn' type='button'>Change</button>
    </div>
  )
};

const Hello = () => {
  return <h2>Welcome</h2>
}

const Goodbye = () => {
  return <h2>Goodbye</h2>
}

export default ToggleChallenge;
