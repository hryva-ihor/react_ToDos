export const TodoAddItem = (props) => {
  return (
    <form action="#" className="todo_input">
      <input
        onChange={props.inputValue}
        type="text"
        placeholder="Enter ToDo list"
        value={props.titleValue}
      />
      <button onClick={props.addNewTodoList}>ADD</button>
    </form>
  );
};
