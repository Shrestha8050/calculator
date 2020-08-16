import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Clear from './components/ClearBTN';
import * as math from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const addToInput = (value) => {
    setInput(input + value);
  };
  const HandleEqual = () => {
    if (input) {
      setInput(math.evaluate(input));
    }
  };

  return (
    <div className='App'>
      <div className='wrapper'>
        <Input input={input} />
        <div className='row'>
          <Button handleClick={addToInput} children='7' />
          <Button handleClick={addToInput} children='8' />
          <Button handleClick={addToInput} children='9' />
          <Button handleClick={addToInput} children='/' />
        </div>
        <div className='row'>
          <Button handleClick={addToInput} children='4' />
          <Button handleClick={addToInput} children='5' />
          <Button handleClick={addToInput} children='6' />
          <Button handleClick={addToInput} children='*' />
        </div>
        <div className='row'>
          <Button handleClick={addToInput} children='1' />
          <Button handleClick={addToInput} children='2' />
          <Button handleClick={addToInput} children='3' />
          <Button handleClick={addToInput} children='+' />
        </div>
        <div className='row'>
          <Button handleClick={addToInput} children='.' />
          <Button handleClick={addToInput} children='0' />
          <Button handleClick={() => HandleEqual()} children='=' />
          <Button handleClick={addToInput} children='-' />
        </div>
        <div className='row'>
          <Clear handleClear={() => setInput('')}>clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
