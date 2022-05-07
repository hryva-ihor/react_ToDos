import React, { useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../../../hooks/common";
import {
  getTodosData,
  deletTodo,
  updateDoneTodos,
  addNewTodo,
} from "../../../services/serveces";
import {
  reductInputTitleClasses,
  loadStatusFunc,
} from "../../../custom.js/style";
import { TodoAddItem } from "./Todo-options/Todo-add-item";
import { TodoFilter } from "./Todo-options/Todo-filter";
import { TodoItem } from "./Todo-options/Todo-item";
import { ThemeContext } from "../../../context/context";
export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("Idle");
  const [newInputText, setNewInputText] = useState("");
  const [redInputText, setRedInputText] = useState("");
  const [filter, setFilter] = useLocalStorage("filter", "all");
  const [color, displayStatus] = loadStatusFunc(status);
  const { toggleTheme } = useContext(ThemeContext);
  // const [count, setCount] = useState(0);
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
      .then(({ data }) => {
        setTodos(data);
      })
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
      addNewTodo(newTodoList).then(({ data }) => {
        setTodos([...todos, data]);
        setNewInputText("");
      });
    } else {
      return false;
    }
  }; //   [todos]
  // );
  const redactTitle = (id) => {
    const item = todos.find((todo) => todo.id === id);
    setRedInputText(item.title);
    reductInputTitleClasses(id);
  };
  const onChangeRedactInput = (e) => {
    return setRedInputText(e.target.value);
  };
  const onSaveBtnClick = (id) => {
    const item = todos.find((todo) => todo.id === id);
    const newItem = { ...item, title: redInputText };
    updateDoneTodos(newItem, id);
    let newTodos = todos.map((item) => (item.id === id ? newItem : item));
    setTodos(newTodos);
    reductInputTitleClasses(id);
  };
  return (
    <div>
      {/* <div>{Counter(0)}</div> */}
      <div className="todo__load-theme">
        <h5>
          Load status: <span style={{ color: color }}>{status}</span>{" "}
        </h5>
        <div>
          <span>Toggle theme</span>
          <input type="checkbox" className="toggle" onClick={toggleTheme} />
        </div>
      </div>
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoAddItem
        inputValue={inputValue}
        addNewTodoList={addNewTodoList}
        titleValue={newInputText}
      />
      <div
        style={{ display: !displayStatus ? "block" : "none" }}
        className="lds-hourglass"
      ></div>
      <ul>
        {filterTodos.map((todo, index) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              index={index}
              onChangeRedactInput={onChangeRedactInput}
              redInputValue={redInputText}
              onSaveBtnClick={onSaveBtnClick}
              OnDoneBtnClick={OnDoneBtnClick}
              OnDelBtnClick={OnDelBtnClick}
              redactTitle={redactTitle}
            />
          );
        })}
      </ul>
    </div>
  );
};

// const Counter = (initialCount) => {
//   return (
//     <>
//       Count: {count}
//       <button onClick={() => setCount(initialCount)}>Скинути</button>
//       <button onClick={() => setCount((prevCount) => prevCount - 1)}>
//         -
//       </button>
//       <button onClick={() => setCount((prevCount) => prevCount + 1)}>
//         +
//       </button>
//     </>
//   );
// };
