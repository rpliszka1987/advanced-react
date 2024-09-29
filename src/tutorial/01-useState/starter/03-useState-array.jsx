import { data } from '../../../data';
import { useState } from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const {id, name} = person; 
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>

        )
        
      })}
    </>
  )
};

export default UseStateArray;
