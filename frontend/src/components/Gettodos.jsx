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
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`
              relative transition-all duration-300 ease-in-out
              hover:scale-[1.02] hover:shadow-lg
              ${todo.completed ? 'opacity-80' : 'opacity-100'}
            `}
          >
            <TodoItem
              todo={todo}
              className={`
                h-full bg-white dark:bg-gray-800 rounded-xl shadow-md
                border-l-4 ${todo.priority === 'high' ? 'border-red-500' :
                  todo.priority === 'medium' ? 'border-yellow-500' :
                    'border-green-500'}
                p-4 flex flex-col
              `}
            />
            {todo.dueDate && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                {new Date(todo.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const TodoItem = ({ todo, className }) => {
  const [isCompleted, setIsCompleted] = useState(todo.completed || false);

  return (
    <div className={`${className}`}>
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            {todo.title}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {todo.description}
          </p>
        </div>
        <button 
          onClick={() => setIsCompleted(!isCompleted)}
          className={`ml-4 px-3 py-1 rounded-md text-sm ${
            isCompleted 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
              : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
          }`}
        >
          {isCompleted ? '✓ Done' : 'Mark Done'}
        </button>
      </div>
    </div>
  );
};

export default Showtodo;