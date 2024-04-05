'use client'
import { useState } from "react";

export default function Tasks() {

  // use useState to create myTasks array to hold objects with String and Date values
  const [myTasks, setMyTasks] = useState([
    {
      task: "Task 1",
      date: new Date(),
    },
    {
      task: "Task 2",
      date: new Date(),
    },
  ]);


  const [task, setTask] = useState("");
  const [date, setDate] = useState(new Date());


  return (
    <>
      <form className="m-0" onSubmit={(event)=>{
        event.preventDefault();
        const task = document.getElementById("task") as HTMLInputElement;
        const date = document.getElementById("date") as HTMLInputElement;
        setMyTasks([
          ...myTasks,
          {
            task: task.value,
            date: new Date(date.value + "T01:00:00"),
          },
        ]);
        task.value = "";
        date.value = "";
        setTask("");
        setDate(new Date());
      }}>
        <label htmlFor="task" className="text-black">Task</label>
        <input type="text" id="task" name="task" className="w-full p-2 rounded-md text-black" />
        <label htmlFor="date" className="text-black">Due Date</label>
        <input type="date" id="date" name="date" className="w-full p-2 rounded-md text-black" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Add Task</button>
      </form>
      
      <div className="m-0">
      <ul className="flex flex-col gap-4">
        {myTasks.map((task, index) => (
          <li key={index} className={`flex flex-col justify-between items-center bg-gray-100 p-4 rounded-md 
          ${task.date.getTime() - new Date().getTime() < 86400000*3 && !(task.date.getTime() - new Date().getTime() < 86400000) ? "bg-green-500" : ""}
          ${task.date.getTime() - new Date().getTime() < 86400000 ? "bg-red-500" : ""}
          `}>
            <p className="text-black text-bold">{task.task}</p>
            <p className="text-black">Due: {task.date.toLocaleDateString()}</p>
            <button className="text-slate-800"onClick={() => {
              setMyTasks(myTasks.filter((_, i) => i !== index));
            }}>Delete</button>
          </li>
        ))}
        </ul>
        </div>
    </>
  );
}
