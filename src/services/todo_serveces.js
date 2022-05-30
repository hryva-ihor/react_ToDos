import { Axios } from "../api/todo_api"
import { TODOS_URI } from "../constants/todo_constants"

export const getTodosData = () => {
  return Axios.get(TODOS_URI)
}

export const updateTodos = ((newItem,id) => {
  return Axios.put(`${TODOS_URI}/${id}`, newItem)
})

export const deletTodo = (id) => {
  return Axios.delete(`${TODOS_URI}/${id}`)
}

export const addNewTodo = (newTodoList) => {
  return Axios.post(TODOS_URI,newTodoList)
}