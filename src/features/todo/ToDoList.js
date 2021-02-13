import React from "react"

import { useSelector, useDispatch } from "react-redux"

import { deleteTodo } from "./todoSlice"

export const ToDoList = () => {
  const todos = useSelector((state) => state.todo)

  const dispatch = useDispatch()

  const mapToDos = todos.map((todo, index) => (
    <article>
      <div>
        <span className="spandis">{todo}</span>
        <button type="button" onClick={() => dispatch(deleteTodo(index))}>
          Complete
        </button>
      </div>
    </article>
  ))

  return (
    <div>
      <p>{mapToDos}</p>
    </div>
  )
}
