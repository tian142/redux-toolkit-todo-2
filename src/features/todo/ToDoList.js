import React from "react"

import { useSelector } from "react-redux"

export const ToDoList = () => {
  const todos = useSelector((state) => state.todo)

  const mapToDos = todos.map((todo, index) => (
    <article>
      <div>
        <span className="spandis">{todo}</span>
        <button>Complete</button>
      </div>
    </article>
  ))

  return (
    <div>
      <p>{mapToDos}</p>
    </div>
  )
}
