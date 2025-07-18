// components/Counter.js
import React from 'react'
import useCounter from '../../customHooks/useCounter'

const Counter = () => {
  const { count, increment, decrement, reset, incrementByAmount } = useCounter();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button> {/* Don't call it here */}
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => incrementByAmount(5)}>Add +5</button>
    </div>
  );
};

export default Counter;
