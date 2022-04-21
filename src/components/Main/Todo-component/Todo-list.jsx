import { Component } from "react";
import { TodoAddItem } from "./Todo-add-item";
import { TodoItem } from "./Todo-item";

export class TodoList extends Component {
  constructor() {
    super();
  }

  render() {
    const state = this.props.state;
    return (
      <div>
        <TodoAddItem state={state} />
        <TodoItem state={state} />
      </div>
    );
  }
}
