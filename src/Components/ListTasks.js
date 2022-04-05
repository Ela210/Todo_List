import React, { useState } from "react";
import { useSelector } from "react-redux";
import TaskTodo from "./TaskTodo";

const Listtasks = () => {
  const list = useSelector((state) => state.Reducer_todo.Task);
  const [Status, setStatus] = useState("All");
  return (
    <div>
      <div>
        <button onClick={() => setStatus("All")}>All</button>
        <button onClick={() => setStatus("done")}>Done</button>
        <button onClick={() => setStatus("Undone")}>Undone</button>
      </div>

      {Status === "All"
        ? list.map((el) => <TaskTodo todo={el} />)
        : Status === "done"
        ? list.filter((el) => el.done).map((el) => <TaskTodo todo={el} />)
        : list.filter((el) => !el.done).map((el) => <TaskTodo todo={el} />)}
    </div>
  );
};

export default Listtasks;
