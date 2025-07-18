import { useCounter } from '../../customHooks/useCounter';
import React from 'react'

const Counter = () => {
  const {reset, count, increment,decrement, incrementByAmount} = useCounter();
  console.log(count)
 

  return (
    <div className='bg-light vh-100 d-flex flex-column justify-content-center align-items-center'>
      <h1 className='mb-4 textU'>Counter: <b>{count}</b> </h1>
     
     <div>
       <button type="button" class="btn btn-primary" onClick={()=>increment()}>Increment</button> &nbsp;
      <button type="button" class="btn btn-danger" onClick={()=>decrement()}>Decrement</button> &nbsp;
<button type="button" class="btn btn-secondary" onClick={reset}>Reset</button>&nbsp;
<button type="button" class="btn btn-success" onClick={()=>incrementByAmount(5)}>Add + 5</button>

     </div>
    </div>
  );
};

export default Counter;
