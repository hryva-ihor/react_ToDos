import { Component } from "react";
import "./Main.scss";
import { TodoList } from "./Todo-component/Todo-list";

export class Main extends Component {
  // constructor() {
  //   super();
  //   // this.OnBtnClick = this.OnBtnClick.bind(this);
  // }

  render() {
    // const { visible, Surname, Name, foods } = this.state;
    return (
      <main className="main-container">
        <TodoList />
      </main>
    );
  }
  // OnBtnClick = () => {
  //   return this.setState({ visible: !this.state.visible });
  // };
}
