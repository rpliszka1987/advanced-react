import { data } from '../../../data';
import { useState } from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = () => {

  }

    const clearAllItems = () => {
      setPeople([]);
  }

  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const {id, name} = person; 
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button">Remove</button>
          </div>

        )
        
      })}
      <button type="button" style={{marginTop: '2rem'}} className='btn' onClick={clearAllItems}>Clear All</button>
    </>
  )
};

export default UseStateArray;
