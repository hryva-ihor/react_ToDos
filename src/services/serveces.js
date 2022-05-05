import axios from "axios";

const API = "https://61e7eaede32cd90017acbe93.mockapi.io/ToDos";
const Axios = axios.create({
  baseURL: API,
  headers: {
      "Content-Type": "application/json",
    }
});

export const getTodosData = () => {
  return Axios.get()
}

export const updateDoneTodos = ((newItem,id) => {
  return Axios.put(id,newItem)
})

export const deletTodo = (id) => {
  return Axios.delete(id)
}

export const addNewTodo = (newTodoList) => {
  return Axios.post('',newTodoList)
}