import React, { Component } from "react";

export class TodoAddItem extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <form action="#" className="todo_input">
        <input
          onChange={this.props.inputValue}
          type="text"
          placeholder="Enter ToDo list"
          value={this.props.newInputText}
        />
        <button onClick={this.props.addNewTodoList}>ADD</button>
      </form>
    );
  }
}
