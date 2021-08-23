import { atom, selector } from "recoil";

export const counterState = atom({
  key: "count",
  default: 0,
});

export const counterWithUnitState = selector({
  key: "countWithUnit",
  get: (props) => {
    console.log(props);
    const countWithUnit = props.get(counterState);
    return countWithUnit + "$";
  },
});
