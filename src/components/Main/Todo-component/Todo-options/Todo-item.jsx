import { todoElementStyle } from "../../../../custom.js/style";
import "../Todo-style.scss";
export const TodoItem = (props) => {
  const todo = props.todo;
  const { completed, title, id } = todo;

  const { todoItemStyle, todoBtnStyle, todoItemListStyle, redactBtnStyle } =
    todoElementStyle(completed);
  return (
    <>
      <div style={todoItemStyle} className="todo-item">
        <button
          style={todoBtnStyle}
          className="todo-item__btn-done"
          onClick={() => {
            props.OnDoneBtnClick(id);
          }}
        >
          {completed ? "Return?" : "DONE"}
        </button>
        <div id={`divList` + id} style={{ display: "flex" }}>
          <li
            key={id}
            id={`list` + id}
            style={todoItemListStyle}
            className="todo-item__list"
          >
            {title}
          </li>
          <input
            id={`input` + id}
            type="text"
            className="redact-input"
            value={props.redInputValue}
            onChange={props.onChangeRedactInput}
          />
          <button
            style={redactBtnStyle}
            id={`saveBtn` + id}
            className="todo-item__btn-done save-btn"
            onClick={() => {
              props.onSaveBtnClick(id);
            }}
          >
            Save?
          </button>
          <button
            style={redactBtnStyle}
            id={`redBtn` + id}
            className="correct-btn-style"
            onClick={() => {
              props.redactTitle(id);
            }}
          ></button>
        </div>

        <button
          onClick={() => {
            props.OnDelBtnClick(id);
          }}
          className="todo-item__btn-delet"
        >
          DEL
        </button>
      </div>
    </>
  );
};
