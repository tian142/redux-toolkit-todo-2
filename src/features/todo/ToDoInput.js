import React, { useState } from "react"

import { addTodo } from "./todoSlice"
import { useDispatch } from "react-redux"

export const ToDoInput = () => {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()
  const onInpitChange = (e) => setInput(e.target.value)
  const onInputSubmit = () => dispatch(addTodo(input))

  return (
    <div>
      <h1>ToDo List</h1>
      <form>
        <input className="spandis" value={input} onChange={onInpitChange} />
        <button type="button" onClick={onInputSubmit}>
          Add ToDo
        </button>
      </form>
    </div>
  )
}
