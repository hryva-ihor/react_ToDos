import {
  todoItemStyle,
  todoItemListStyle,
  todoBtnStyle,
} from "../../../custom.js/style";
import "../Todo-style.scss";

export const TodoItem = (props) => {
  const todo = props.todo;
  const { completed, title, id } = todo;

  return (
    <div style={todoItemStyle(completed)} className="todo_item">
      <button
        style={todoBtnStyle(completed)}
        className="todo_item__btn_done"
        onClick={() => {
          props.OnDoneBtnClick(id);
        }}
      >
        {completed ? "Return?" : "DONE"}
      </button>
      <li
        key={id}
        style={todoItemListStyle(completed)}
        className="todo_item__list"
      >
        {title}
      </li>
      <button
        onClick={() => {
          props.OnDelBtnClick(id);
        }}
        className="todo_item__btn_delet"
      >
        DEL
      </button>
    </div>
  );
};

// export class TodoItem extends Component {
//   render() {
//     const todo = this.props.todo;
//     const { completed, title, id } = todo;
//     return (
//       <div style={this.todo_item_style(completed)} className="todo_item">
//         <button
//           style={this.todo_btn_style(completed)}
//           className="todo_item"
//           className="todo_item__btn_done"
//           onClick={() => {
//             this.props.OnDoneBtnClick(id);
//           }}
//         >
//           {completed ? "Return?" : "DONE"}
//         </button>
//         <li
//           key={id}
//           style={this.todo_item_list_style(completed)}
//           className="todo_item__list"
//         >
//           {title}
//         </li>
//         <button
//           onClick={() => {
//             this.props.OnDelBtnClick(id);
//           }}
//           className="todo_item__btn_delet"
//         >
//           DEL
//         </button>
//       </div>
//     );
//   }
//   todo_item_style(completed) {
//     return {
//       backgroundColor: !completed ? "transparent" : "#6890b0",
//     };
//   }
//   todo_item_list_style(completed) {
//     return { textDecoration: !completed ? "none" : "line-through" };
//   }
//   todo_btn_style(completed) {
//     return {
//       backgroundColor: !completed ? "#1db41d" : "yellow",
//       color: !completed ? "white" : "black",
//     };
//   }
// }
