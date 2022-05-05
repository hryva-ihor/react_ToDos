import React, { Component } from "react";
import style from "./Header.module.scss";

export class Header extends Component {
  // state = {
  //   Name: "Ihor",
  //   Surname: "Hryva",
  //   visible: true,
  //   foods: ["eggs", "bread", "apple", "banana"],
  // };

  // constructor() {
  //   super();
  //   // this.OnBtnClick = this.OnBtnClick.bind(this);
  // }

  render() {
    // const { visible, Surname, Name, foods } = this.state;
    return (
      <header className={style.header}>
        <h1 className={style.header_title}>ToDo</h1>
        <p className={style.header_paragraph}>
          {/* {visible && <span>{`${Surname} ${Name}`}</span>} */}
        </p>
        {/* <ul>
          {foods.map((food, index) => {
            return <li key={index}>{food}</li>;
          })}
        </ul>
        <button onClick={this.OnBtnClick}>{visible ? "hide" : "show"}</button> */}
      </header>
    );
  }
  // OnBtnClick = () => {
  //   return this.setState({ visible: !this.state.visible });
  // };
}
