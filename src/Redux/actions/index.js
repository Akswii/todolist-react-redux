let nextTodoId = 0;

const addTodo = text => ({
    type: "ADD_TODO",
    id: nextTodoId++,
    text: text
});

const toggleTodo = id => ({
    type: "TOGGLE_TODO",
    id: id
});

const deleteTodo = id => ({
    type: "DELETE_TODO",
    id: id
})

export {
    addTodo,
    toggleTodo,
    deleteTodo
}
