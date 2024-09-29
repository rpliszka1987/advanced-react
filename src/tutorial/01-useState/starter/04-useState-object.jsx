import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] =useState({
    name: 'Peter',
    age: 26,
    hobby: 'Reading books'
  })
 

  const displayPerson = () => {
    setPerson({name: 'John', age: 28, hobby: 'Playing basketball'})
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.hobby}</h3>
      <button className='btn' onClick={displayPerson}>Show John</button>
    </>

  )
};

export default UseStateObject;
