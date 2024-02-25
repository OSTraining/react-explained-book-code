import React, { useState } from 'react';

const Practice1 = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
};

export default Practice1;
