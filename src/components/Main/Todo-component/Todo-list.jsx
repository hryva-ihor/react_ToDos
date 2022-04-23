import { Component } from "react";
import { TodoAddItem } from "./Todo-add-item";
import { TodoItem } from "./Todo-item";

const API = "https://61e7eaede32cd90017acbe93.mockapi.io/ToDos";

export class TodoList extends Component {
  state = {
    todos: [],
    newInputText: "",
  };
  constructor() {
    super();
    this.OnDoneBtnClick = this.OnDoneBtnClick.bind(this);
    this.OnDelBtnClick = this.OnDelBtnClick.bind(this);
    this.inputValue = this.inputValue.bind(this);
    this.addNewTodoList = this.addNewTodoList.bind(this);
  }

  render() {
    // console.log(`totolist`, this.state.newInputText);
    return (
      <div>
        <TodoAddItem
          inputValue={this.inputValue}
          addNewTodoList={this.addNewTodoList}
          titleValue={this.state.newInputText}
        />
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <TodoItem
                todo={todo}
                key={todo.id}
                index={index}
                OnDoneBtnClick={this.OnDoneBtnClick}
                OnDelBtnClick={this.OnDelBtnClick}
              />
            );
          })}
        </ul>
      </div>
    );
  }
  OnDoneBtnClick(id) {
    const item = this.state.todos.find((todo) => todo.id === id);
    const newItem = { ...item, completed: !item.completed };
    fetch(API + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    this.setState({
      todos: this.state.todos.map((item) => (item.id === id ? newItem : item)),
    });
  }
  OnDelBtnClick(id) {
    fetch(API + "/" + id, {
      method: "DELETE",
    });

    const newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
  }
  componentDidMount() {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => this.setState({ todos: data }));
  }
  inputValue(e) {
    return this.setState({ newInputText: e.target.value });
  }
  addNewTodoList(e) {
    e.preventDefault();
    if (this.state.newInputText) {
      const newTodoList = {
        title: this.state.newInputText,
        completed: false,
      };
      fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodoList),
      })
        .then((resp) => resp.json())
        .then((data) =>
          this.setState({
            todos: [...this.state.todos, data],
            newInputText: "",
          })
        );
    } else {
      return false;
    }
  }
}
