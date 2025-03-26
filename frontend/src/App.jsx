import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateTodo from "./components/CreateTodo"
import ShowTodos from "./components/Gettodos";
import HomePage from "./components/Home";
function App() {

  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='newtodo' element={<CreateTodo/>}/>
          <Route path='showtodo' element={<ShowTodos/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App
