import React from 'react';
import './clear.css';
const ClearBTN = (props) => {
  return (
    <div className='clear' onClick={() => props.handleClear()}>
      {props.children}
    </div>
  );
};

export default ClearBTN;
