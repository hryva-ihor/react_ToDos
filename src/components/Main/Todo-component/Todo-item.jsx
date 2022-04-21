import React, { Component } from "react";
import "./Todo-style.scss";

export class TodoItem extends Component {
  render() {
    const todo = this.props.todo;
    const { completed, title, id } = todo;
    return (
      <div style={this.todo_item_style(completed)} className="todo_item">
        <button
          disabled={completed}
          className="todo_item__btn_done"
          onClick={() => {
            this.props.OnDoneBtnClick(id);
          }}
        >
          DONE
        </button>
        <li
          key={id}
          style={this.todo_item_list_style(completed)}
          className="todo_item__list"
        >
          {title}
        </li>
        <button
          onClick={() => {
            this.props.OnDelBtnClick(id);
          }}
          className="todo_item__btn_delet"
        >
          DEL
        </button>
      </div>
    );
  }
  todo_item_style(completed) {
    return { backgroundColor: !completed ? "transparent" : "#6890b0" };
  }
  todo_item_list_style(completed) {
    return { textDecoration: !completed ? "none" : "line-through" };
  }
}