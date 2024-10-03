import { useEffect, useState } from "react";
import axios from "axios";

const Showtodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/todos");
        setTodos(response.data.todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid gap-x-8 gap-y-4 grid-cols-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const TodoItem = ({ todo }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="bg-slate-300 rounded-lg p-5">
      <h1 className="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white">{todo.title}</h1>
      <h2 className="text-center text-gray-500 dark:text-gray-400">{todo.description}</h2>
      <button onClick={() => setIsCompleted(!isCompleted)} className={isCompleted ? "text-green-400":"text-blue-400"}>
        {isCompleted ? 'Completed' : 'Click to Complete'}
      </button>
    </div>
  );
};

export default Showtodo;