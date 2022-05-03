import "./Main.scss";
import { TodoList } from "./Todo-component/Todo-list";

export const Main = () => {
  return (
    <main className="main-container">
      <TodoList />
    </main>
  );
};
