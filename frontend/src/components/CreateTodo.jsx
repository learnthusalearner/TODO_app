import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom"
const CreateTodo = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const navigate = useNavigate();
	
    const fetchTodo = async () => {
	try {

		const res = await axios.post('http://localhost:3000/todo', {
			title,
			description,
		});

		if (res.status === 201) {
			alert('Todo added successfully!');
			navigate("/showtodo");
		} else {
			alert('Failed to add todo. Please try again.');
		}
	} catch (error) {
		console.error('Error adding todo:', error);
		alert('An error occurred while adding the todo.');
	}
};

	return <div className="bg-gray-900 h-screen flex justify-center">
		<div className="flex flex-col justify-center">
			<div className="rounded-lg bg-white w-80 text-center p-2 ">
				<div>
					<div>
						<h1 className="font-stretch-extra-expanded ">Create Task</h1>
						<label for="first_name" class="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Task</label>
						<input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="what task?" required />
					</div>
					<div>
						<label for="last_name" class="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Description</label>
						<input value={description}onChange={(e) => { setDescription(e.target.value) }} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="something about it . . ." required />
					</div>
					<br />
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => fetchTodo(title, description)}>
						Add Todo
					</button>
				</div>
			</div>
		</div>
	</div>
}

export default CreateTodo;
