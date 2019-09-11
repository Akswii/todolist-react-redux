const getTodoState = store => store;

const getTodosList = store => getTodoState(store) ? getTodoState(store).allIds : [];

const getTodoById = (store, id) => getTodoState(store) ? { ...getTodoState(store).byIds[id], id } : {};

const getTodos = store => getTodosList(store).map(id => getTodoById(store, id));

export {
    getTodos,
    getTodosList,
    getTodoState,
    getTodoById
};