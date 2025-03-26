import React from "react";
import { useNavigate } from "react-router-dom";
export default function ToDoListHeader() {
    const navigate = useNavigate();
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        {/* Neumorphic Button */}
        <div className="relative">
          <button className="px-6 py-2 text-sm font-semibold text-gray-300 bg-gray-800 rounded-lg shadow-lg">
            COMPLETED
          </button>
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-40 rounded-lg blur-lg"></div>
        </div>
  
        {/* Main Heading */}
        <h1 className="mt-6 text-5xl font-bold text-blue-300">To Do List</h1>
  
        {/* Updated Tagline */}
        <p className="mt-2 text-lg text-gray-400">
          Organize Your Tasks, Achieve Your Goals.
        </p>
  
        {/* Action Buttons */}
        <div className="mt-4 flex space-x-4">
          <button onClick={()=>navigate('newtodo')} className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
            Create Todos
          </button>
          <button onClick={()=>navigate('showtodo')}  className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
            Get Todos
          </button>
        </div>
      </div>
    );
  }
  