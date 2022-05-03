import { useEffect, useState } from "react";
import { useLocalStorage } from "../../../hooks/common";
import {
  getTodosData,
  deletTodo,
  updateDoneTodos,
  addNewTodo,
} from "../../../services/serveces";
import { TodoAddItem } from "./Todo-options/Todo-add-item";
import { TodoFilter } from "./Todo-options/Todo-filter";
import { TodoItem } from "./Todo-options/Todo-item";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("Idle");
  const [newInputText, setNewInputText] = useState("");
  const [filter, setFilter] = useLocalStorage("filter", "all");

  //const filterTodos = useMemo(() => {}
  let filterTodos = todos;
  if (filter !== "all") {
    filterTodos = todos.filter((todo) => {
      return (
        (filter === "done" && todo.completed) ||
        (filter === "notDone" && !todo.completed)
      );
    });
  }
  //, [filter, todos]);

  useEffect(() => {
    setStatus("Progress");
    getTodosData()
      .then((data) => setTodos(data))
      .then(() => {
        setStatus("Loaded");
      })
      .catch(() => {
        setStatus("Error");
      });
  }, []);

  const OnDoneBtnClick = (id) => {
    const item = todos.find((todo) => todo.id === id);
    const newItem = { ...item, completed: !item.completed };
    updateDoneTodos(newItem, id);
    let newTodos = todos.map((item) => (item.id === id ? newItem : item));
    setTodos(newTodos);
  };

  const OnDelBtnClick = (id) => {
    deletTodo(id);
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const inputValue = (e) => {
    return setNewInputText(e.target.value);
  };

  // const addNewTodoList = useCallback(
  //   (e) => {
  const addNewTodoList = (e) => {
    e.preventDefault();
    if (newInputText) {
      const newTodoList = {
        title: newInputText,
        completed: false,
      };
      addNewTodo(newTodoList).then((data) => {
        setTodos([...todos, data]);
        setNewInputText("");
      });
    } else {
      return false;
    }
  }; //   [todos]
  // );
  const loadStatusColor = (status) => {
    let color;
    switch (status) {
      case "Idle":
        color = "gray";
        break;
      case "Progress":
        color = "orange";
        break;
      case "Error":
        color = "red";
        break;
      case "Loaded":
        color = "green";
        break;
      default:
        color = "red";
    }
    return color;
  };
  return (
    <div>
      <h5>
        Load status:{" "}
        <span style={{ color: loadStatusColor(status) }}>{status}</span>{" "}
      </h5>
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoAddItem
        inputValue={inputValue}
        addNewTodoList={addNewTodoList}
        titleValue={newInputText}
      />
      <ul>
        {filterTodos.map((todo, index) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              index={index}
              OnDoneBtnClick={OnDoneBtnClick}
              OnDelBtnClick={OnDelBtnClick}
            />
          );
        })}
      </ul>
    </div>
  );
};
