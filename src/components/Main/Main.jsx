import { Component } from "react";
import "./Main.scss";
import { TodoList } from "./Todo-component/Todo-list";

export class Main extends Component {
  state = [
    {
      id: "14",
      title: "Сделать утреннюю зарядку",
      completed: true,
    },
    {
      id: "16",
      title: "Купить продукты",
      completed: false,
    },
    {
      id: "18",
      title: "Сделать домашнее задание",
      completed: false,
    },
    {
      id: "19",
      title: "Сходить в кино",
      completed: true,
    },
    {
      id: "20",
      title: "Позвонить другу",
      completed: false,
    },
  ];

  constructor() {
    super();
    // this.OnBtnClick = this.OnBtnClick.bind(this);
  }

  render() {
    // const { visible, Surname, Name, foods } = this.state;
    return (
      <main className="main-container">
        <TodoList state={this.state} />
      </main>
    );
  }
  // OnBtnClick = () => {
  //   return this.setState({ visible: !this.state.visible });
  // };
}
