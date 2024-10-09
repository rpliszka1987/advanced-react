import { useState } from 'react';

const ToggleChallenge = () => {
  const [isVisible, setIsVisible] = useState(false);

  const habndleButton = () => {
    if(isVisible) {
      setIsVisible(false)
     
    }
    setIsVisible(true)
    
  }

  return (
    <div>
      <h1>Welcome</h1>
      {isVisible ? <Hello /> : <Goodbye />}
      {console.log(isVisible)}
      <button className='btn' type='button' onClick={habndleButton}>{isVisible ? 'Hide' : 'Show'}</button>
    </div>
  )
};

const Hello = () => {
  return <h2>Hello</h2>
}

const Goodbye = () => {
  return <h2>Goodbye</h2>
}

export default ToggleChallenge;
