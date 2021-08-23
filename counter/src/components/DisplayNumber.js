import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterState, counterWithUnitState } from "../store/CounterState";

const DisplayNumber = () => {
  //   const [count, _] = useRecoilState(counterState);
  const countWithUnit = useRecoilValue(counterWithUnitState);

  return (
    <div>
      현재 숫자 : <span>{countWithUnit}</span>
    </div>
  );
};

export default DisplayNumber;
