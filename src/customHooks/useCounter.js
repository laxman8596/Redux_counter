import { decrement, increment, incrementByAmount, reset } from "../features/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";

export const useCounter = ()=>{
const count = useSelector((state)=>state.counter.value);
// console.log(count)
const dispatch = useDispatch()

  return {count, 
    increment:()=>dispatch(increment()), 
    decrement:()=>dispatch(decrement()), 
    reset:()=>dispatch(reset()), 
    incrementByAmount:(amount)=>dispatch(incrementByAmount(amount))}
}