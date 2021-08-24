import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { taskIdState, selectedTodoState } from "../store/todoState";

const SelectTodo = () => {
  const [taskId, setTaskId] = useRecoilState(taskIdState);
  const selectedTodo = useRecoilValue(selectedTodoState(taskId));

  const selectTodo = (e) => {
    setTaskId(e.target.value);
  };

  return (
    <div>
      <select name="taskId" id="taskId" onChange={selectTodo}>
        <option value="0">태스크 1</option>
        <option value="1">태스크 2</option>
        <option value="2">태스크 3</option>
      </select>
      <div>
        <h1>
          선택한 일정 : <span>{selectedTodo.title}</span>
        </h1>
      </div>
    </div>
  );
};

export default SelectTodo;
