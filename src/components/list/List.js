import React from "react";

export default function List() {
  const tasks = [
    {
      task: "task1",
      status: "true",
    },
    {
      task: "task2",
      status: "true",
    },
    {
      task: "task3",
      status: "false",
    },
  ];

  const listItems = tasks.map((task) => <li>{task.task}</li>);

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}
