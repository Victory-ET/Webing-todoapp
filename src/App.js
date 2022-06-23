import "./App.css";
import { React, useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  //state to manage input field
  const [todo, setTodo] = useState("");

  const addNewTodo = async (todo) => {
    // function to add new todo to the list from the input field
  };
  return (
    <div className=" h-screen flex justify-center items-center flex-col gap-8">
      <div className=" flex justify-center items-center gap-6">
        <input
          className=" w-72 border-2  rounded-md px-3 py-3 bg-[#E8ECF4] backdrop-blur-lg"
          //set value of input field
          value={todo}
          onChange={(e) => {
            //update state on changes to text
            setTodo(e.target.value);
          }}
          placeholder="Enter a new task"
        />
        <button
          className=" h-full px-5 py-2 bg-[#0264F6] text-white font-medium rounded-md"
          onClick={() => {
            //execute function to add new todo to the list
            addNewTodo(todo);
          }}
        >
          Add Todo Item
        </button>
      </div>
      <TaskList />
    </div>
  );
}
export default App;
