import "./Main.scss";
import { TodoList } from "./Todo-component/Todo-list";
import { Route, Routes } from "react-router";
import { HomePage } from "./Homepage/HomePage";
import { NotFoundPage } from "./notFoundPage/NotFoundPage";

export const Main = () => {
  return (
    <main className="main-container">
      <Routes>
        <Route path={"/todolist"} element={<TodoList />} />
        <Route path={"/"} element={<HomePage />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};
