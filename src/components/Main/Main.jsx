import "./Main.scss";
import { TodoList } from "./Todo-component/Todo-list";

import { useContext } from "react";
import { ThemeContext } from "../../context/context";

export const Main = () => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <main
      style={{
        background: currentTheme.main.background,
        color: currentTheme.main.color,
      }}
      className="main-container"
    >
      <TodoList />
    </main>
  );
};
