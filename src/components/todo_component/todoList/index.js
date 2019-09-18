import React from "react";
import { connect } from "react-redux";

import TodoItem from "../todoItem";
import AddTodo from "../addTodo";
import FilterTodos from "../filterTodos";

const mapStateToProps = state => ({ todos: state.todoApp.todos, visibilityFilter: state.todoApp.visibilityFilter });

const TodoList = ({ todos, visibilityFilter }) => {
    const getFilteredTodos = () => {
        switch (visibilityFilter) {
            case "SHOW_COMPLETE":
                return todos.filter(todo => todo.completed === true);
            case "SHOW_INCOMPLETE":
                return todos.filter(todo => todo.completed === false);
            default:
                return todos;
        }
    }

    return (
        <>
            <div className="row no-gutters">
                <h4 className="d-flex flex-grow-1">Todos</h4>
                <FilterTodos />
            </div>
            <ul className="list-group mt-3">
                {
                    getFilteredTodos(todos).map((todo, index) =>
                        <TodoItem
                            key={index}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                        />
                    )
                }
            </ul>
            <AddTodo />
        </>
    );
};

export default connect(mapStateToProps)(TodoList);
