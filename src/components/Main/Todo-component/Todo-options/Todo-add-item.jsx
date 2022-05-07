export const TodoAddItem = (props) => {
  return (
    <form action="#" className="todo-input">
      <textarea
        onChange={props.inputValue}
        type="text"
        rows="5"
        cols="30"
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
