export const TodoAddItem = (props) => {
  return (
    <form action="#" className="todo-input">
      <input
        onChange={props.inputValue}
        type="text"
        row="3"
        placeholder="Enter ToDo list"
        value={props.titleValue}
        // onBlur={() => {
        //   console.log(`onBlur`);
        // }}
        // onFocus={() => {
        //   console.log(`onFocus`);
        // }}
      />
      <button onClick={props.addNewTodoList}>ADD</button>
    </form>
  );
};
