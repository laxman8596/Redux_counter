// customHooks/useCounter.js
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../features/counter/counterSlice";

const useCounter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return {
    count,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
    incrementByAmount: (amount) => dispatch(incrementByAmount(amount)),
  };
};

export default useCounter;
