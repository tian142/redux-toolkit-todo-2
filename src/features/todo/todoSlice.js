import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    deleteTodo: (state, action) => {
      state.slice(action.payload, 1)
    },
  },
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
