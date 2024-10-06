import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, setText] = useState('')
  const [name, setName] = useState('susan')

  const codeExample = text || 'hello world'

  return (
    <div>
      <h4>Falsy OR : {text || 'hello world'}</h4>
      <h4>Falsy AND : {text && 'hello world'}</h4>
      <h4>Truly OR : {name || 'hello world'}</h4>
      <h4>Truly AND : {name && 'hello world'}</h4>
      {codeExample}
    </div>
  );
};
export default ShortCircuitOverview;
