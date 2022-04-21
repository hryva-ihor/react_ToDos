import React, { Component } from "react";

export class TodoAddItem extends Component {
  constructor() {
    super();
    this.inputValue = this.inputValue.bind(this);
    this.addNewTodoList = this.addNewTodoList.bind(this);
  }

  render() {
    return (
      <div className="todo_input">
        <input
          onChange={this.inputValue}
          type="text"
          placeholder="Enter ToDo list"
        />
        <button onClick={this.addNewTodoList}>ADD</button>
      </div>
    );
  }
  inputValue(e = ``) {
    const inputTextValue = e ? e.target.value : ``;
    return inputTextValue;
  }
  addNewTodoList() {
    const todoObject = this.props.state;
    const arrLength = todoObject.length;
    this.setState({
      todoObject: todoObject.push({
        id: `${arrLength + 1}`,
        title: `${this.inputValue()}`,
        completed: false,
      }),
    });
    console.log(todoObject);
    this.render();
  }
}
