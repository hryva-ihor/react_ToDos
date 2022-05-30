import React from "react";
import { useTodos } from "../../../hooks/todo_common";
import { TodoAddItem } from "./Todo-options/Todo-add-item";
import { TodoFilter } from "./Todo-options/Todo-filter";
import { TodoItem } from "./Todo-options/Todo-item";
import { loadStatusFunc } from "../../../custom.js/todo_style";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
export const TodoList = () => {
  const {
    onDone,
    delTodo,
    addTodo,
    redTitle,
    saveBtn,
    newInputText,
    setNewInputText,
    redInputText,
    setRedInputText,
    filter,
    setFilter,
    filterTodos,
    status,
    loadingBtn,
    setLoadingBtn,
  } = useTodos();
  const [, displayStatus] = loadStatusFunc(status);
  const OnDoneBtnClick = (id) => {
    onDone(id);
  };

  const OnDelBtnClick = (id) => {
    delTodo(id);
  };

  const inputValue = (e) => {
    return setNewInputText(e.target.value);
  };

  const addNewTodoList = (e) => {
    e.preventDefault();
    setLoadingBtn(true);
    addTodo();
  };

  const redactTitle = (id) => {
    redTitle(id);
  };
  const onChangeRedactInput = (e) => {
    return setRedInputText(e.target.value);
  };
  const onSaveBtnClick = (id) => {
    saveBtn(id);
  };

  return (
    <Box className="todo-block">
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TodoAddItem
            inputValue={inputValue}
            addNewTodoList={addNewTodoList}
            titleValue={newInputText}
            loadingBtn={loadingBtn}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TodoFilter filter={filter} setFilter={setFilter} />
        </Grid>
      </Grid>
      <div
        style={{ display: !displayStatus ? "block" : "none" }}
        className="lds-hourglass"
      ></div>
      <Grid container spacing={2}>
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
      </Grid>
    </Box>
  );
};
