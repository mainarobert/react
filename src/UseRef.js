import React, { useState, useEffect, useRef } from "react";


function UseRef() {

  const [ name, setName ] = useState('');
  const renderTimes = useRef(1);

  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  })

  return (
    <>
      <input value= {name} onChange= {e => setName(e.target.value)} />
      <p>My name is {name}</p>
      <p>I've rendered {renderTimes.current} times</p>
    </>
  );
}


export default UseRef;
