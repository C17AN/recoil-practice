import { atom, selectorFamily } from "recoil";

export const taskIdState = atom({
  key: "taskId",
  default: 0,
});

export const todoState = atom({
  key: "todoState",
  default: [
    { id: 1, title: "새로운 할일 1" },
    { id: 2, title: "새로운 할일 2" },
    { id: 3, title: "새로운 할일 3" },
  ],
});

export const selectedTodoState = selectorFamily({
  get:
    (id) =>
    ({ get }) => {
      const todoList = get(todoState);
      return todoList[Number(id)];
    },
});
