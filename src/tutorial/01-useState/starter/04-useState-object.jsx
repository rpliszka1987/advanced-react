import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('Peter')
  const [age, setAge] = useState(24)
  const [hobby, setHobby] = useState('Reading books')

  const displayPerson = () => {
    setName('John')
    setAge(45)
    setHobby('Playing basketball')
  }

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{hobby}</h3>
      <button className='btn' onClick={displayPerson}>Show John</button>
    </>

  )
};

export default UseStateObject;
