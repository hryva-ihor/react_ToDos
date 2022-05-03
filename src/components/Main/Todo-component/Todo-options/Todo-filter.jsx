export const TodoFilter = ({ filter, setFilter }) => {
  const onChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="todo-filter">
      <label htmlFor="filter">Filter todos</label>
      <select
        className="todo-filter"
        onChange={onChange}
        value={filter}
        name=""
        id=""
      >
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="notDone">Not done</option>
      </select>
    </div>
  );
};
