import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount
} from "../redux/counter/counterSlice";

export default function Counter() {
  const counterValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{counterValue}</h1>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        incrementByAmount
      </button>
    </div>
  );
}
