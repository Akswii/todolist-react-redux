const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case "TOGGLE_TODO":
            return state.map(todo => {
                return todo.id === action.id ? { ...todo, completed: !todo.completed } : todo;
            })
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}

const visibilityFilter = (state = "SHOW_ALL", action) => {
    switch (action.type) {
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        default:
            return state;
    }
}

const todoApp = (state = {}, action) => {
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    }
}

export default todoApp;
