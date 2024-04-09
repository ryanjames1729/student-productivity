'use client'
import { useState } from "react";

export default function Tasks() {

  // use useState to create myTasks array to hold objects with String and Date values
  const [myTasks, setMyTasks] = useState([
    {
      task: "Task 1",
      date: new Date(),
      complete: false
    },
    {
      task: "Task 2",
      date: new Date(),
      complete: false
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
            complete: false
          },
        ]);
        let sorted = [
          ...myTasks,
          {
            task: task.value,
            date: new Date(date.value + "T01:00:00"),
            complete: false
          },
        ]
        sorted.sort((a, b) => a.date.getTime() - b.date.getTime());
        setMyTasks(sorted);
        console.log(sorted);

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
      
      <div className="m-0 pt-2 w-full">
      <ul className="flex flex-wrap gap-6 items-center justify-center">
        {myTasks.map((task, index) => (
          <li key={index} className={`flex flex-col bg-gray-100 p-4 rounded-md md:w-[30%] w-full
          ${task.date.getTime() - new Date().getTime() < 86400000*3 && !(task.date.getTime() - new Date().getTime() < 86400000) ? "bg-green-500" : ""}
          ${task.date.getTime() - new Date().getTime() < 86400000 ? "bg-red-500" : ""}
          ${task.complete ? "bg-slate-500" : ""}
          `}>
            <div className="flex flex-row-reverse w-full">
            <button onClick={()=>{
              let newTasks = [...myTasks];
              newTasks[index].complete = !newTasks[index].complete;
              setMyTasks(newTasks);
            }}><span className="align-right">{task.complete ? "✅" : "✖️"}</span></button>
            </div>
            
            {task.complete ? 
              <><p className="text-black text-bold line-through">{task.task}</p>
              <p className="text-black line-through">Due: {task.date.toLocaleDateString()}</p></>
              : <><p className="text-black text-bold">{task.task}</p>
                <p className="text-black">Due: {task.date.toLocaleDateString()}</p></>
            }

            <button onClick={()=>{
              let newTasks = [...myTasks];
              newTasks.splice(index, 1);
              setMyTasks(newTasks);
            }}><span className="align-right border-2 rounded-md border-slate-500 hover:border-slate-800 hover:bg-slate-800">🗑️</span></button>
          </li>
        ))}
        </ul>
        </div>
    </>
  );
}
