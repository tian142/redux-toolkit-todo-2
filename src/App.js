import "./App.css"
import { ToDoInput } from "./features/todo/ToDoInput"
import { ToDoList } from "./features/todo/ToDoList"

function App() {
  return (
    <div className="App">
      <ToDoInput />
      <ToDoList />
    </div>
  )
}

export default App
