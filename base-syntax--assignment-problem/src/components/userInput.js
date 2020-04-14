import React from 'react';
const userInputComponent = props => {
  return (
    <div>
      <input type="text" style={props.style} value={props.value} onChange={props.click}/>
    </div>
  );
};
export default userInputComponent;
