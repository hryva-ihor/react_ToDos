import React, { Component } from "react";
import "./Todo-style.scss";

export class TodoItem extends Component {
  constructor() {
    super();
    this.OnDoneBtnClick = this.OnDoneBtnClick.bind(this);
    this.OnDelBtnClick = this.OnDelBtnClick.bind(this);
  }

  render() {
    const state = this.props.state;
    return (
      <ul>
        {state.map((el, index) => {
          return (
            <div
              key={index}
              style={this.todo_item_style(el)}
              className="todo_item"
            >
              <button
                data-id={index}
                disabled={el.completed}
                className="todo_item__btn_done"
                onClick={this.OnDoneBtnClick}
              >
                DONE
              </button>
              <li
                style={this.todo_item_list_style(el)}
                className="todo_item__list"
              >
                {el.title}
              </li>
              <button
                onClick={this.OnDelBtnClick}
                className="todo_item__btn_delet"
              >
                DEL
              </button>
            </div>
          );
        })}
      </ul>
    );
  }
  todo_item_style(el) {
    return { backgroundColor: !el.completed ? "transparent" : "#6890b0" };
  }
  todo_item_list_style(el) {
    return { textDecoration: !el.completed ? "none" : "line-through" };
  }
  OnDoneBtnClick(e) {
    let itemId = e.target.dataset.id;
    const todoStatus = this.props.state;
    this.setState({ todoStatus: (todoStatus[itemId].completed = true) });
  }
  OnDelBtnClick(e) {
    let itemId = e.target.dataset.id;
    console.log(`del click`);
    const todoStatus = this.props.state;
    this.setState({ todoStatus: todoStatus.splice(itemId - 1, 1) });
  }
}
