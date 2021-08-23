import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterState, counterWithUnitState } from "../store/CounterState";

const ControllNumber = () => {
  const [count, setCount] = useRecoilState(counterState);
  console.log(useRecoilState);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default ControllNumber;
