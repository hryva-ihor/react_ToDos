import { useEffect, useState } from "react";
import { reductInputTitleClasses } from "../custom.js/todo_style";
import { addNewTodo, deletTodo, getTodosData, updateTodos } from "../services/todo_serveces";

const useLocalStorage = (key, defaultValue = '') => {
const [value, setValue] = useState(localStorage.getItem(key) || defaultValue);
	useEffect(() => {
			localStorage.setItem(key, value);
	}, [key,value]);
	return [value, setValue]
}

export const useTodos = () => {
	const [todos, setTodos] = useState([]);
  const [newInputText, setNewInputText] = useState("");
  const [redInputText, setRedInputText] = useState("");
  const [filter, setFilter] = useLocalStorage("filter", "all");
  const [status, setStatus] = useState("Idle");
  const [loadingBtn, setLoadingBtn] = useState(false);
  let filterTodos = todos;
  if (filter !== "all") {
    filterTodos = todos.filter((todo) => {
      return (
        (filter === "done" && todo.completed) ||
        (filter === "notDone" && !todo.completed)
      );
    });
  }

  useEffect(() => {
    setStatus("Progress");
    getTodosData()
      .then(({ data }) => {
        setTodos(data);
      })
      .then(() => {
        setStatus("Loaded");
      })
      .catch(() => {
        setStatus("Error");
      });
  }, []);

  

	const onDone = (id) => {
		const item= todos.find((todo) => todo.id === id);
		const newItem = { ...item, completed: !item.completed };
		updateTodos(newItem, id);
		let newTodos = todos.map((item) => (item.id === id ? newItem : item));
		setTodos(newTodos);
	};

	const delTodo = (id) => {
		deletTodo(id);
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	}

	const addTodo = () => {
		if (newInputText) {
      setLoadingBtn(true)
			const newTodoList = {
        title: newInputText,
        completed: false,
			};
			addNewTodo(newTodoList).then(({ data }) => {
        setTodos([...todos, data]);
        setNewInputText("");
        setLoadingBtn(false)
        
			});
      } else {
			alert("your todo list empty");
			return false;
      }
	}

  const redTitle = (id) => {
    const item = todos.find((todo) => todo.id === id);
    setRedInputText(item.title);
    reductInputTitleClasses(id);
    document.querySelector(`#input${id}`).focus();
  }

  const saveBtn = (id) => {
    if (redInputText) {
      const item = todos.find((todo) => todo.id === id);
      const newItem = { ...item, title: redInputText };
      updateTodos(newItem, id);
      let newTodos = todos.map((item) => (item.id === id ? newItem : item));
      setTodos(newTodos);
      reductInputTitleClasses(id);
    } else {
      alert("todo list is empty");
      if (window.confirm("want delet todo list?")) {
        delTodo(id);
      }
      return false;
    }
  }
  


	return {onDone,delTodo,addTodo, redTitle, saveBtn, newInputText, setNewInputText,redInputText, setRedInputText, filter, setFilter, filterTodos, status,setLoadingBtn,loadingBtn}
}






// 1й хук отримує дані, за замовчуванням count = 6

// а на кнопку добавив функцію яка з кожник кліком до count +  6

// відповідно при оновленні, збільшуються контакти


// const newCount = () => {
//   setCount(count + 6)
// }

// useEffect(()=>{
//   axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count}')
//   .then((item) => {
//     setUsers(item.data.users)
//     setTotalUsers(item.data.total_users)
//     console.log(item)
//   })
// },[count]) 

// useEffect(()=>{
//   if(users.length == totalUsers){
//       setDisabled(true)
//   } 
// },[users.length])
