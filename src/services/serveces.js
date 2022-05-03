const API = "https://61e7eaede32cd90017acbe93.mockapi.io/ToDos";


export const getTodosData = () => {
    return fetch(API)
    .then((resp) => resp.json())
}

export const updateDoneTodos = ((newItem,id) => {
    return fetch(API + "/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
    });
})

export const deletTodo = (id) => {
    return fetch(API + "/" + id, {
        method: "DELETE",
    });
}

export const addNewTodo = (newTodoList) => {
    return fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodoList),
        })
        .then((resp) => resp.json())
}